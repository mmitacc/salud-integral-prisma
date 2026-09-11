import type { Request, Response } from "express";
import { usuarioModel } from "../models/usuario.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";
import AgendaMedicoResponseSchema from "../schemas/agenda.medico.schema";
import bcrypt from "bcryptjs";

export const getAllMedico = async (req: Request, res: Response) => {
  try {
    const medicos = await usuarioModel.findAllMedico(
      req.query.especialidad as string,
    );
    res.status(200).json({ total: medicos.length, data: medicos });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioModel.findAll();
    res.status(200).json({ total: usuarios.length, data: usuarios });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getUsuarioById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuario = await usuarioModel.findFirst(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ message: "Usuario encontrado", data: usuario });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  try {
    const {
      nombres,
      apellidos,
      telefono,
      username,
      role,
      password,
      email,
      masculino,
      fechanacimiento,
      id_especialidad,
    } = req.body;
    if (fechanacimiento && fechanacimiento > new Date()) {
      return res.status(400).json({
        error: "La fecha de nacimiento no puede ser una fecha futura",
      });
    }
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const newUsuario = await usuarioModel.create({
      nombres,
      apellidos,
      telefono,
      username,
      role,
      hashedPassword,
      email,
      masculino,
      fechanacimiento,
      id_especialidad,
    });
    return res
      .status(201)
      .json({ message: "Usuario creado con éxito", data: newUsuario });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const {
      nombres,
      apellidos,
      telefono,
      username,
      role,
      email,
      masculino,
      fechanacimiento,
      id_especialidad,
    } = req.body;
    if (fechanacimiento && fechanacimiento > new Date()) {
      return res.status(400).json({
        error: "La fecha de nacimiento no puede ser una fecha futura",
      });
    }
    const updatedUsuario = await usuarioModel.update(id, {
      nombres,
      apellidos,
      telefono,
      username,
      role,
      email,
      masculino,
      fechanacimiento,
      id_especialidad,
    });
    return res.json({
      message: "Usuario actualizado con éxito",
      data: updatedUsuario,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const softDeleteUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const softDeletedUsuario = await usuarioModel.softDelete(id);
    return res.json({
      message: "Usuario eliminado con éxito",
      data: softDeletedUsuario,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const agendaMedico = async (req: Request, res: Response) => {
  try {
    const id = Number(req.user!.id);
    if (req.user?.role !== "MEDICO") {
      return res
        .status(400)
        .json({ message: "Solo un médico puede acceder a su agenda." });
    }
    const { fechaInicio, fechaFin } = req.query as {
      fechaInicio: string;
      fechaFin: string;
    };

    const start =
      fechaInicio && fechaInicio.trim() !== ""
        ? new Date(fechaInicio)
        : undefined;
    const end =
      fechaFin && fechaFin.trim() !== "" ? new Date(fechaFin) : undefined;

    if ((start && isNaN(start.getTime())) || (end && isNaN(end.getTime()))) {
      return res.status(400).json({
        status: "error",
        error: "Datos inválidos",
        detalles:
          "El formato de fechaInicio o fechaFin no es válido. Usa el formato AAAA-MM-DD.",
      });
    }

    const medicoAgenda = await usuarioModel.findAgendaByDate(id, start, end);
    if (!medicoAgenda) {
      return res.status(404).json({
        message: "No se encontraron pacientes programados para esas fechas",
      });
    }
    const agenda = AgendaMedicoResponseSchema.parse(medicoAgenda);
    res
      .status(200)
      .json({ "total programados": agenda.consultas?.length, medico: agenda });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
