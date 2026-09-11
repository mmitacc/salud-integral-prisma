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
    const options: Prisma.ConsultaFindFirstArgs = {
      where: { id, deleted: false },
      select: {
        id: true,
        estado: true,
        citadate: true,
        costo: true,
        registerdate: true,
        paciente: {
          select: { id: true, nombres: true, apellidos: true, telefono: true },
        },
        usuario: {
          select: {
            id: true,
            nombres: true,
            apellidos: true,
            especialidad: { select: { tipo: true } },
          },
        },
      },
    };
    return await prisma.consulta.findFirst(options);
  },
  createCita: async (
    costo: number,
    citadate: Date,
    id_usuario: number,
    id_paciente: number,
  ) => {
    return await prisma.consulta.create({
      data: {
        costo,
        citadate,
        id_paciente,
        id_usuario,
      },
      omit: { deleted: true },
    });
  },
  updateEstado: async (id: number, estado: EstadoCita) => {
    return await prisma.consulta.update({
      where: { id },
      data: {
        estado,
      },
      omit: { deleted: true },
    });
  },
  update: async (
    id: number,
    costo: number,
    citadate: Date,
    id_usuario: number,
    id_paciente: number,
  ) => {
    return await prisma.consulta.update({
      where: { id },
      data: {
        costo,
        citadate,
        id_usuario,
        id_paciente,
      },
      omit: { deleted: true },
    });
  },
  softDelete: async (id: number) => {
    const consulta = await prisma.consulta.findUnique({
      where: { id, deleted: false },
    });
    if (!consulta) {
      throw new Error("Consulta no encontrada");
    }
    return await prisma.consulta.update({
      where: { id },
      data: { deleted: true },
      omit: { deleted: true },
    });
  },
  findRentabilidadArea: async () => {
    const especialidades = await prisma.especialidad.findMany({
      select: {
        id: true,
        tipo: true,
        usuarios: {
          select: {
            _count: {
              select: {
                consultas: {
                  where: { estado: "PROGRAMADA", deleted: false },
                },
              },
            },
          },
        },
      },
    });
    return especialidades
      .map((esp) => {
        const totalConsultas = esp.usuarios.reduce(
          (sum, med) => sum + med._count.consultas,
          0,
        );
        return {
          id: esp.id,
          tipo: esp.tipo,
          total_programadas: totalConsultas,
        };
      })
      .filter((esp) => esp.total_programadas > 0);
  },
  findCorteOperativo: async (fechaInicio?: Date, fechaFin?: Date) => {
    const whereClause: Prisma.ConsultaWhereInput = {
      deleted: false,
      estado: { not: "PROGRAMADA" },
    };
    if (fechaInicio && fechaFin) {
      whereClause.registerdate = {
        gte: fechaInicio,
        lte: fechaFin,
      };
    }
    const corteOperativo = await prisma.consulta.groupBy({
      by: ["estado"],
      _count: {
        estado: true,
      },
      where: whereClause,
    });
    return corteOperativo.map((est) => {
      return {
        estado: est.estado,
        count: est._count.estado,
      };
    });
  },
};
