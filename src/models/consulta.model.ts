import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";
import { EstadoCita } from "../../prisma/generated-client/client";

export const consultaModel = {
  findAll: async () => {
    return await prisma.consulta.findMany({
      orderBy: { id: "asc" },
      omit: { deleted: true },
      where: { deleted: false },
    });
  },
  findFirst: async (id: number) => {
    return await prisma.consulta.findFirst({
      where: { id, deleted: false },
      include: {
        paciente: { omit: { deleted: true } },
        medico: { omit: { deleted: true } },
      },
      omit: { deleted: true },
    });
  },
  create: async (
    estado: EstadoCita,
    costo: number,
    fecha: Date,
    horario: Date,
    id_medico: number,
    id_paciente: number,
  ) => {
    return await prisma.consulta.create({
      data: {
        estado,
        costo,
        fecha,
        horario,
        id_paciente,
        id_medico,
      },
      omit: { deleted: true },
    });
  },
  update: async (
    id: number,
    estado: EstadoCita,
    costo: number,
    fecha: Date,
    horario: Date,
    id_medico: number,
    id_paciente: number,
  ) => {
    return await prisma.consulta.update({
      where: { id },
      data: {
        estado,
        costo,
        fecha,
        horario,
        id_medico,
        id_paciente,
      },
      omit: { deleted: true },
    });
  },
  softDelete: async (id: number) => {
    const consulta = await prisma.consulta.findUnique({
      where: { id, deleted: true },
    });
    if (consulta) {
      throw new Error("Consulta no encontrada");
    }
    return await prisma.consulta.update({
      where: { id },
      data: { deleted: true },
      omit: { deleted: true },
    });
  },
  deleteAdmin: async (id: number) => {
    return await prisma.consulta.delete({
      where: { id },
    });
  },
  findAllDeleted: async (fechaInicio?: Date, fechaFin?: Date) => {
    const options: Prisma.ConsultaFindManyArgs = {
      orderBy: { id: "asc" },
      include: {
        paciente: { omit: { deleted: true } },
        medico: { omit: { deleted: true } },
      },
      where: { deleted: true },
    };
    if (fechaInicio && fechaFin) {
      options.where = {
        ...options.where,
        registerdate: {
          gte: fechaInicio,
          lte: fechaFin,
        },
      };
    }
    return await prisma.consulta.findMany(options);
  },
};
