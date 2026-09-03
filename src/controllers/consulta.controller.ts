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
    const { estado, costo, fecha, horario, id_paciente, id_medico } = req.body;
    const newConsulta = await consultaModel.create(
      estado,
      costo,
      fecha,
      horario,
      id_paciente,
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
    const { estado, costo, fecha, horario, id_paciente, id_medico } = req.body;
    const updatedConsulta = await consultaModel.update(
      id,
      estado,
      costo,
      fecha,
      horario,
      id_medico,
      id_paciente,
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

export const deleteConsulta = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedConsulta = await consultaModel.deleteAdmin(id);
    return res.json({
      message: "Consulta eliminada con éxito",
      data: deletedConsulta,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getAllConsultaDeleted = async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query as {
      fechaInicio: string;
      fechaFin: string;
    };
    const consultas = await consultaModel.findAllDeleted(
      fechaInicio ? new Date(fechaInicio) : undefined,
      fechaFin ? new Date(fechaFin) : undefined,
    );
    if (consultas.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron consultas eliminadas" });
    }
    res
      .status(200)
      .json({ "total eliminados": consultas.length, data: consultas });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
