import type { Request, Response } from "express";
import { consultaModel } from "../models/consulta.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";
import ConsultaIdSimple from "../schemas/consultaId.schema";
import { pacienteModel } from "../models/paciente.model";
import { medicoModel } from "../models/medico.model";

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
    const consultaFormat = ConsultaIdSimple.parse(consulta);
    res
      .status(200)
      .json({ message: "Consulta encontrada", data: consultaFormat });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const postCita = async (req: Request, res: Response) => {
  try {
    const { costo, citadate, id_paciente, id_medico } = req.body;
    const paciente = await pacienteModel.findFirst(id_paciente);
    const medico = await medicoModel.findFirst(id_medico);
    if (!paciente) {
      return res.status(404).json({
        error: `Paciente con codigo: ${id_paciente}, no existe.`,
      });
    }
    if (!medico) {
      return res.status(404).json({
        error: `Medico con codigo: ${id_medico}, no existe.`,
      });
    }
    const newConsulta = await consultaModel.createCita(
      costo,
      citadate,
      id_paciente,
      id_medico,
    );
    if (citadate <= new Date()) {
      return res.status(400).json({
        error: "La fecha junto a la hora de la cita, debe ser mayor al actual.",
      });
    }
    // formato a fecha local
    const fecha = newConsulta.citadate.toLocaleDateString("sv-SE");
    // formato a hora local de 24 horas
    const horario = newConsulta.citadate.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const { citadate: _, ...resto } = newConsulta;
    const resultConsulta = { fecha, horario, ...resto };
    return res
      .status(201)
      .json({ message: "Consulta creada con éxito", data: resultConsulta });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putConsulta = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const consulta = await consultaModel.findFirst(id);
    if (!consulta) {
      return res.status(404).json({ error: "Consulta no encontrada" });
    }
    const [fechaOld, horarioOld] = consulta.citadate.toISOString().split("T");
    const { estado, costo, fecha, horario, id_paciente, id_medico } = req.body;
    const citadate = new Date(
      `${fecha ?? fechaOld}T${horario ?? horarioOld}:00`,
    );
    const updatedConsulta = await consultaModel.update(
      id,
      estado,
      costo,
      citadate,
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

export const putEstadoCita = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const consulta = await consultaModel.findFirst(id);
    if (!consulta) {
      return res.status(404).json({ error: "Consulta no encontrada" });
    }
    if (consulta.estado !== "PROGRAMADA") {
      return res.status(400).json({ error: "Consulta ya no esta PROGRAMADA" });
    }
    const { estado } = req.body;
    const updatedConsulta = await consultaModel.updateEstado(id, estado);
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

export const rentabilidadArea = async (req: Request, res: Response) => {
  try {
    const rentabilidad = await consultaModel.findRentabilidadArea();
    return res.json({
      message: "Rentabilidad por area",
      data: rentabilidad,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const corteOperativo = async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query as {
      fechaInicio: string;
      fechaFin: string;
    };
    const consultas = await consultaModel.findCorteOperativo(
      fechaInicio ? new Date(fechaInicio) : undefined,
      fechaFin ? new Date(fechaFin) : undefined,
    );
    if (consultas.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron citas para contabilizar" });
    }
    res.status(200).json({ "corte operativo diario": consultas });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
