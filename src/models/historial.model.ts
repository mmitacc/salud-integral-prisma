import { prisma } from "../config/prisma";

export const historialModel = {
  findAll: async () => {
    return await prisma.historial.findMany({ orderBy: { id: "asc" } });
  },
  findFirst: async (id: number) => {
    return await prisma.historial.findFirst({ where: { id } });
  },
  create: async (
    id_paciente: number,
    motivo: string,
    antecedentes: string | null,
    triaje: string,
    diagnostico: string | null,
    tratamiento: string | null,
    receta: string | null,
  ) => {
    return await prisma.historial.create({
      data: {
        id_paciente,
        motivo,
        antecedentes,
        triaje,
        diagnostico,
        tratamiento,
        receta,
      },
    });
  },
  update: async (
    id: number,
    id_paciente: number,
    motivo: string,
    antecedentes: string | null,
    triaje: string,
    diagnostico: string | null,
    tratamiento: string | null,
    receta: string | null,
  ) => {
    return await prisma.historial.update({
      where: { id },
      data: {
        id_paciente,
        motivo,
        antecedentes,
        triaje,
        diagnostico,
        tratamiento,
        receta,
      },
    });
  },
  delete: async (id: number) => {
    return await prisma.historial.delete({
      where: { id },
    });
  },
  softDelete: async (id: number) => {
    return await prisma.historial.update({
      where: { id },
      data: { deleted: true },
    });
  },
};
