import type { Request, Response } from "express";
import { pacienteModel } from "../models/paciente.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";

export const getAllPaciente = async (req: Request, res: Response) => {
  try {
    const pacientes = await pacienteModel.findAll();
    res.status(200).json({ total: pacientes.length, data: pacientes });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getPacienteById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const paciente = await pacienteModel.findFirsft(id);
    if (!paciente) {
      return res.status(404).json({ error: "Paciente no encontrado" });
    }
    res.status(200).json({ message: "Paciente encontrado", data: paciente });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const postPaciente = async (req: Request, res: Response) => {
  try {
    const {
      nombres,
      apellidos,
      telefono,
      email,
      masculino,
      fechanacimiento,
      tiposangre,
      alergias,
    } = req.body;
    if (fechanacimiento && fechanacimiento > new Date()) {
      return res.status(400).json({
        error: "La fecha de nacimiento no puede ser una fecha futura",
      });
    }
    const newCliente = await pacienteModel.create(
      nombres,
      apellidos,
      telefono,
      email,
      masculino,
      fechanacimiento,
      tiposangre,
      alergias,
    );
    return res
      .status(201)
      .json({ message: "Paciente creado con éxito", data: newCliente });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putPaciente = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const {
      nombres,
      apellidos,
      telefono,
      email,
      masculino,
      fechanacimiento,
      tiposangre,
      alergias,
    } = req.body;
    if (fechanacimiento && fechanacimiento > new Date()) {
      return res.status(400).json({
        error: "La fecha de nacimiento no puede ser una fecha futura",
      });
    }
    const updatedPaciente = await pacienteModel.update(
      id,
      nombres,
      apellidos,
      telefono,
      email,
      masculino,
      fechanacimiento,
      tiposangre,
      alergias,
    );
    return res.json({
      message: "Paciente actualizado con éxito",
      data: updatedPaciente,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
export const deletePaciente = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedPaciente = await pacienteModel.delete(id);
    return res.json({
      message: "Paciente eliminado con éxito",
      data: deletedPaciente,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const softDeletePaciente = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const softDeletedPaciente = await pacienteModel.softDelete(id);
    return res.json({
      message: "Paciente eliminado con éxito",
      data: softDeletedPaciente,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
