import type { Request, Response } from "express";
import { especialidadModel } from "../models/especialidad.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";

export const getAllEspecialidades = async (req: Request, res: Response) => {
  try {
    const especialidades = await especialidadModel.findAll();
    res
      .status(200)
      .json({ total: especialidades.length, data: especialidades });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getEspecialidadById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const especialidad = await especialidadModel.findFirst(id);
    if (!especialidad) {
      return res.status(404).json({ error: "Especialidad no encontrada" });
    }
    res
      .status(200)
      .json({ message: "Especialidad encontrada", data: especialidad });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const postEspecialidad = async (req: Request, res: Response) => {
  try {
    const { tipo } = req.body;
    const newEspecialidad = await especialidadModel.create(tipo);
    return res
      .status(201)
      .json({
        message: "Especialidad creada con éxito",
        data: newEspecialidad,
      });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putEspecialidad = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { tipo } = req.body;
    const updatedEspecialidad = await especialidadModel.update(id, tipo);
    return res.json({
      message: "Especialidad actualizada con éxito",
      data: updatedEspecialidad,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const deleteEspecialidad = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedEspecialidad = await especialidadModel.delete(id);
    return res.json({
      message: "Especialidad eliminada con éxito",
      data: deletedEspecialidad,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
