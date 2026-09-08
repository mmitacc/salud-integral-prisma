import type { Request, Response } from "express";
import procesarErrorPrisma from "../utils/errorHandlerUtil";
import { crudAdmin } from "../models/crudAdmin.model";
import { MODELOS_PERMITIDOS } from "../config/prisma";
import type { queryCrudAdminTypeSchema } from "../schemas/query.crudAdmin.schema";

export const getAllDeleted = async (req: Request, res: Response) => {
  try {
    const modelo = req.params.modelo as string;
    if (!modelo || !MODELOS_PERMITIDOS.includes(modelo)) {
      return res.status(404).json({ error: "Modelo no existe" });
    }
    const { deleted, fechaInicio, fechaFin } =
      req.query as unknown as queryCrudAdminTypeSchema;
    const consultas = await crudAdmin.findAllDeleted(
      modelo,
      deleted as boolean,
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
      .json({
        [`total registros en ${modelo}`]: consultas.length,
        data: consultas,
      });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getFirst = async (req: Request, res: Response) => {
  try {
    const modelo = req.params.modelo as string;
    if (!modelo || !MODELOS_PERMITIDOS.includes(modelo)) {
      return res.status(404).json({ error: "Modelo no existe" });
    }
    const id = Number(req.params.id);
    const consulta = await crudAdmin.findFirst(modelo, id);
    if (!consulta) {
      return res.status(404).json({ error: "Consulta no encontrada" });
    }
    res
      .status(200)
      .json({
        message: `Registro de modelo ${modelo}, encontrado satisfactoriamente`,
        data: consulta,
      });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const updateDeleted = async (req: Request, res: Response) => {
  try {
    const modelo = req.params.modelo as string;
    if (!modelo || !MODELOS_PERMITIDOS.includes(modelo)) {
      return res.status(404).json({ error: "Modelo no existe" });
    }
    const id = Number(req.params.id);
    const registro = await crudAdmin.findFirst(modelo, id);
    if (!registro) {
      return res.status(404).json({
        error: `En el modelo: ${modelo}, no se encontró el registro con id: ${id}`,
      });
    }
    if (!registro.deleted) {
      return res.status(400).json({
        error: `En el modelo: ${modelo}, el registro con id: ${id} NO está eliminado`,
      });
    }
    const updatedRegistro = await crudAdmin.updateDeleted(modelo, id);
    return res.json({
      message: `Registro de modelo ${modelo}, recuperado satisfactoriamente`,
      data: updatedRegistro,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const deleteReal = async (req: Request, res: Response) => {
  try {
    const modelo = req.params.modelo as string;
    if (!modelo || !MODELOS_PERMITIDOS.includes(modelo)) {
      return res.status(404).json({ error: "Modelo no existe" });
    }
    const id = Number(req.params.id);
    const registro = await crudAdmin.findFirst(modelo, id);
    if (!registro) {
      return res.status(404).json({
        error: `Registro con id:${id} no encontrado, en el modelo: ${modelo}`,
      });
    }
    const deletedRegistro = await crudAdmin.deleteReal(modelo, id);
    return res.json({
      message: `El registro con id=${id} del modelo ${modelo}, se eliminó permanentemente.`,
      data: deletedRegistro,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
