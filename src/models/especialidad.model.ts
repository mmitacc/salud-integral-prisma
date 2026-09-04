import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";

export const especialidadModel = {
  findAll: async () => {
    return await prisma.especialidad.findMany({
      where: { deleted: false },
      orderBy: { id: "asc" },
      omit: { deleted: true },
    });
  },
  findFirst: async (id: number) => {
    return await prisma.especialidad.findFirst({
      where: { id, deleted: false },
      omit: { deleted: true },
    });
  },
  create: async (tipo: string) => {
    return await prisma.especialidad.create({
      data: {
        tipo,
      },
      omit: { deleted: true },
    });
  },
  update: async (id: number, tipo: string) => {
    return await prisma.especialidad.update({
      where: { id },
      data: {
        tipo,
      },
      omit: { deleted: true },
    });
  },
  softDelete: async (id: number) => {
    const especialidad = await prisma.especialidad.findUnique({
      where: { id, deleted: false },
    });
    if (!especialidad) {
      throw new Error("Especialidad no encontrado");
    }
    return await prisma.especialidad.update({
      where: { id },
      data: {
        deleted: true,
      },
      omit: { deleted: true },
    });
  },
  deleteAdmin: async (id: number) => {
    return await prisma.especialidad.delete({
      where: { id },
    });
  },
  findAllDeleted: async (fechaInicio?: Date, fechaFin?: Date) => {
    const options: Prisma.EspecialidadFindManyArgs = {
      orderBy: { id: "asc" },
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
    return await prisma.especialidad.findMany(options);
  },
};
