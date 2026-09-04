import type { Request, Response } from "express";
import { especialidadModel } from "../models/especialidad.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";
import { medicoModel } from "../models/medico.model";

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
    return res.status(201).json({
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

export const softDeleteEspecialidad = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const especialidad = await especialidadModel.findFirst(id);
    if (!especialidad) {
      return res.status(404).json({ error: "Especialidad no encontrada" });
    }
    const medicos = await medicoModel.findAllByIdEspecialidad(
      Number(especialidad.id),
    );
    if (medicos.length !== 0) {
      return res.status(400).json({
        error: "Existen medicos relacionados a esta especialidad",
        medicos: medicos,
      });
    }
    const softDeletedEspecialidad = await especialidadModel.softDelete(id);
    return res.json({
      message: "Especialidad eliminada con éxito",
      data: softDeletedEspecialidad,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const deleteEspecialidad = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedEspecialidad = await especialidadModel.deleteAdmin(id);
    return res.json({
      message: "Especialidad eliminada con éxito",
      data: deletedEspecialidad,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getAllEspacialidadDeleted = async (
  req: Request,
  res: Response,
) => {
  try {
    const { fechaInicio, fechaFin } = req.query as {
      fechaInicio: string;
      fechaFin: string;
    };
    const especialidades = await especialidadModel.findAllDeleted(
      fechaInicio ? new Date(fechaInicio) : undefined,
      fechaFin ? new Date(fechaFin) : undefined,
    );
    if (especialidades.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron especialidades eliminadas" });
    }
    res.status(200).json({
      "total eliminados": especialidades.length,
      data: especialidades,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
