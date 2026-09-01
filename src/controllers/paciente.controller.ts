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

export const postPaciente = async (req: Request, res: Response) => {
  try {
    const {
      nombres,
      apellidos,
      telefono,
      email,
      masculino,
      fecha_nac,
      tipo_sangre,
      alergias,
    } = req.body;
    if (
      !nombres ||
      !apellidos ||
      !telefono ||
      !email ||
      !masculino ||
      !fecha_nac ||
      !tipo_sangre ||
      !alergias
    ) {
      res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    const newCliente = await pacienteModel.create(
      nombres,
      apellidos,
      telefono,
      email,
      masculino,
      fecha_nac,
      tipo_sangre,
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
