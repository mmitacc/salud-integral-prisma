import { prisma } from "../config/prisma";
import { EstadoCita } from "../../prisma/generated-client/client";

export const citaModel = {
  findAll: async () => {
    return await prisma.cita.findMany({ orderBy: { id: "asc" } });
  },
  findFirst: async (id: number) => {
    return await prisma.cita.findFirst({ where: { id } });
  },
  create: async (
    estado: EstadoCita,
    pagoinicial: number,
    id_paciente: number,
  ) => {
    return await prisma.cita.create({
      data: {
        estado,
        pagoinicial,
        id_paciente,
      },
    });
  },
  update: async (
    id: number,
    estado: EstadoCita,
    pagoinicial: number,
    id_paciente: number,
  ) => {
    return await prisma.cita.update({
      where: { id },
      data: {
        estado,
        pagoinicial,
        id_paciente,
      },
    });
  },
  delete: async (id: number) => {
    return await prisma.cita.delete({
      where: { id },
    });
  },
};
