import type { Request, Response } from "express";
import { citaModel } from "../models/cita.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";

export const getAllCitas = async (req: Request, res: Response) => {
  try {
    const citas = await citaModel.findAll();
    res.status(200).json({ total: citas.length, data: citas });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getCitaById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const cita = await citaModel.findFirst(id);
    if (!cita) {
      return res.status(404).json({ error: "Cita no encontrada" });
    }
    res.status(200).json({ message: "Cita encontrada", data: cita });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const postCita = async (req: Request, res: Response) => {
  try {
    const { estado, pagoinicial, id_paciente } = req.body;
    const newCita = await citaModel.create(estado, pagoinicial, id_paciente);
    return res
      .status(201)
      .json({ message: "Cita creada con éxito", data: newCita });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putCita = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { estado, pagoinicial, id_paciente } = req.body;
    const updatedCita = await citaModel.update(
      id,
      estado,
      pagoinicial,
      id_paciente,
    );
    return res.json({
      message: "Cita actualizada con éxito",
      data: updatedCita,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const deleteCita = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedCita = await citaModel.delete(id);
    return res.json({
      message: "Cita eliminada con éxito",
      data: deletedCita,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const softDeleteCita = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const softDeletedCita = await citaModel.softDelete(id);
    return res.json({
      message: "Cita eliminada con éxito",
      data: softDeletedCita,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
