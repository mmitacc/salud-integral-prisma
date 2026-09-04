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
        medico: {
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
    id_medico: number,
    id_paciente: number,
  ) => {
    return await prisma.consulta.create({
      data: {
        costo,
        citadate,
        id_paciente,
        id_medico,
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
    estado: EstadoCita,
    costo: number,
    citadate: Date,
    id_medico: number,
    id_paciente: number,
  ) => {
    return await prisma.consulta.update({
      where: { id },
      data: {
        estado,
        costo,
        citadate,
        id_medico,
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
  findRentabilidadArea: async () => {
    const especialidades = await prisma.especialidad.findMany({
      select: {
        id: true,
        tipo: true,
        medicos: {
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
        const totalConsultas = esp.medicos.reduce(
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
    const options = {
      by: ["estado"] as
        Prisma.ConsultaScalarFieldEnum[] | Prisma.ConsultaScalarFieldEnum,
      _count: { estado: true } as Prisma.ConsultaCountAggregateInputType,
      where: {
        deleted: false,
        estado: { not: "PROGRAMADA" },
      } as Prisma.ConsultaWhereInput,
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
    const corteOperativo = await prisma.consulta.groupBy(options);
    return corteOperativo.map((est) => {
      return {
        estado: est.estado,
        count: est._count.estado,
      };
    });
  },
};
