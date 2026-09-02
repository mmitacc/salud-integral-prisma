import { prisma } from "../config/prisma";

export const especialidadModel = {
  findAll: async () => {
    return await prisma.especialidad.findMany({ orderBy: { id: "asc" } });
  },
  findFirst: async (id: number) => {
    return await prisma.especialidad.findFirst({ where: { id } });
  },
  create: async (tipo: string) => {
    return await prisma.especialidad.create({
      data: {
        tipo,
      },
    });
  },
  update: async (id: number, tipo: string) => {
    return await prisma.especialidad.update({
      where: { id },
      data: {
        tipo,
      },
    });
  },
  delete: async (id: number) => {
    return await prisma.especialidad.delete({
      where: { id },
    });
  },
  softDelete: async (id: number) => {
    return await prisma.especialidad.update({
      where: { id },
      data: {
        deleted: true,
      },
    });
  },
};
