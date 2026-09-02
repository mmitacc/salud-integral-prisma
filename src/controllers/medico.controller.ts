import type { Request, Response } from "express";
import { medicoModel } from "../models/medico.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";

export const getAllMedico = async (req: Request, res: Response) => {
  try {
    const medicos = await medicoModel.findAll(req.query.especialidad as string);
    res.status(200).json({ total: medicos.length, data: medicos });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getMedicoById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const medico = await medicoModel.findFirst(id);
    if (!medico) {
      return res.status(404).json({ error: "Médico no encontrado" });
    }
    res.status(200).json({ message: "Médico encontrado", data: medico });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const postMedico = async (req: Request, res: Response) => {
  try {
    const {
      nombres,
      apellidos,
      telefono,
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
    const newMedico = await medicoModel.create(
      nombres,
      apellidos,
      telefono,
      email,
      masculino,
      fechanacimiento,
      id_especialidad,
    );
    return res
      .status(201)
      .json({ message: "Médico creado con éxito", data: newMedico });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putMedico = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const {
      nombres,
      apellidos,
      telefono,
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
    const updatedMedico = await medicoModel.update(
      id,
      nombres,
      apellidos,
      telefono,
      email,
      masculino,
      fechanacimiento,
      id_especialidad,
    );
    return res.json({
      message: "Médico actualizado con éxito",
      data: updatedMedico,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const softDeleteMedico = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const softDeletedMedico = await medicoModel.softDelete(id);
    return res.json({
      message: "Médico eliminado con éxito",
      data: softDeletedMedico,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const deleteMedico = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedMedico = await medicoModel.deleteAdmin(id);
    return res.json({
      message: "Médico eliminado con éxito",
      data: deletedMedico,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getAllMedicoDeleted = async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query as {
      fechaInicio: string;
      fechaFin: string;
    };
    const medicos = await medicoModel.findAllDeleted(
      fechaInicio ? new Date(fechaInicio) : undefined,
      fechaFin ? new Date(fechaFin) : undefined,
    );
    if (medicos.length===0) {
      return res.status(404).json({ message: "No se encontraron médicos eliminados" });
    }
    res.status(200).json({ "total eliminados": medicos.length, data: medicos });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
