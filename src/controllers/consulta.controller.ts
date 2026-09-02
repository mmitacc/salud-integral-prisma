import type { Request, Response } from "express";
import { consultaModel } from "../models/consulta.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";

export const getAllConsultas = async (req: Request, res: Response) => {
  try {
    const consultas = await consultaModel.findAll();
    res.status(200).json({ total: consultas.length, data: consultas });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getConsultaById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const consulta = await consultaModel.findFirst(id);
    if (!consulta) {
      return res.status(404).json({ error: "Consulta no encontrada" });
    }
    res.status(200).json({ message: "Consulta encontrada", data: consulta });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const postConsulta = async (req: Request, res: Response) => {
  try {
    const { fecha, horario, costo, id_cita, id_medico } = req.body;
    const newConsulta = await consultaModel.create(
      fecha,
      horario,
      costo,
      id_cita,
      id_medico,
    );
    return res
      .status(201)
      .json({ message: "Consulta creada con éxito", data: newConsulta });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putConsulta = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { fecha, horario, costo, id_cita, id_medico } = req.body;
    const updatedConsulta = await consultaModel.update(
      id,
      fecha,
      horario,
      costo,
      id_cita,
      id_medico,
    );
    return res.json({
      message: "Consulta actualizada con éxito",
      data: updatedConsulta,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const deleteConsulta = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedConsulta = await consultaModel.delete(id);
    return res.json({
      message: "Consulta eliminada con éxito",
      data: deletedConsulta,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const softDeleteConsulta = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const softDeletedConsulta = await consultaModel.softDelete(id);
    return res.json({
      message: "Consulta eliminada con éxito",
      data: softDeletedConsulta,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
