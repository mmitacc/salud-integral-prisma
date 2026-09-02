import { prisma } from "../config/prisma";

export const consultaModel = {
  findAll: async () => {
    return await prisma.consulta.findMany({ orderBy: { id: "asc" } });
  },
  findFirst: async (id: number) => {
    return await prisma.consulta.findFirst({ where: { id } });
  },
  create: async (
    fecha: Date,
    horario: Date,
    costo: number,
    id_cita: number,
    id_medico: number,
  ) => {
    return await prisma.consulta.create({
      data: {
        fecha,
        horario,
        costo,
        id_cita,
        id_medico,
      },
    });
  },
  update: async (
    id: number,
    fecha: Date,
    horario: Date,
    costo: number,
    id_cita: number,
    id_medico: number,
  ) => {
    return await prisma.consulta.update({
      where: { id },
      data: {
        fecha,
        horario,
        costo,
        id_cita,
        id_medico,
      },
    });
  },
  delete: async (id: number) => {
    return await prisma.consulta.delete({
      where: { id },
    });
  },
  softDelete: async (id: number) => {
    return await prisma.consulta.update({
      where: { id },
      data: { deleted: true },
    });
  },
};
