import type { Request, Response } from "express";
import { pacienteModel } from "../models/paciente.model";

export const getAllPaciente = async (req: Request, res: Response) => {
  try {
    const pacientes = await pacienteModel.findAll();
    res.status(200).json({ total: pacientes.length, data: pacientes });
  } catch (error) {
    res.status(500).json({ message: error });
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
    res.status(500).json({ message: error });
  }
};
