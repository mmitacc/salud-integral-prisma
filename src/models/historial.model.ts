import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";

export const historialModel = {
  findAll: async () => {
    return await prisma.historial.findMany({
      where: { deleted: false },
      orderBy: { id: "asc" },
      omit: { deleted: true },
    });
  },
  findFirst: async (id: number) => {
    return await prisma.historial.findFirst({
      where: { id, deleted: false },
      omit: { deleted: true },
    });
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
      omit: { deleted: true },
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
      omit: { deleted: true },
    });
  },
  softDelete: async (id: number) => {
    return await prisma.historial.update({
      where: { id },
      data: { deleted: true },
      omit: { deleted: true },
    });
  },
  findAllByIdPaciente: async (idPaciente: number) => {
    return await prisma.historial.findMany({
      where: { id_paciente: idPaciente, deleted: false },
      select: { id: true, motivo: true, registerdate: true },
    });
  },
};
