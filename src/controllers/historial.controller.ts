import type { Request, Response } from "express";
import { historialModel } from "../models/historial.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";
import { pacienteModel } from "../models/paciente.model";

export const getAllHistoriales = async (req: Request, res: Response) => {
  try {
    const historiales = await historialModel.findAll();
    res.status(200).json({ total: historiales.length, data: historiales });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getHistorialById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const historial = await historialModel.findFirst(id);
    if (!historial) {
      return res.status(404).json({ error: "Historial no encontrado" });
    }
    res.status(200).json({ message: "Historial encontrado", data: historial });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const postHistorial = async (req: Request, res: Response) => {
  try {
    const {
      id_paciente,
      motivo,
      antecedentes,
      triaje,
      diagnostico,
      tratamiento,
      receta,
    } = req.body;
    const newHistorial = await historialModel.create(
      id_paciente,
      motivo,
      antecedentes,
      triaje,
      diagnostico,
      tratamiento,
      receta,
    );
    return res
      .status(201)
      .json({ message: "Historial creado con éxito", data: newHistorial });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putHistorial = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const {
      id_paciente,
      motivo,
      antecedentes,
      triaje,
      diagnostico,
      tratamiento,
      receta,
    } = req.body;
    const updatedHistorial = await historialModel.update(
      id,
      id_paciente,
      motivo,
      antecedentes,
      triaje,
      diagnostico,
      tratamiento,
      receta,
    );
    return res.json({
      message: "Historial actualizado con éxito",
      data: updatedHistorial,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const deleteHistorial = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedHistorial = await historialModel.delete(id);
    return res.json({
      message: "Historial eliminado con éxito",
      data: deletedHistorial,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
