import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";

export const pacienteModel = {
  findAll: async () => {
    return await prisma.paciente.findMany({
      orderBy: { id: "asc" },
      omit: { deleted: true },
      where: { deleted: false },
    });
  },
  findFirst: async (id: number) => {
    return await prisma.paciente.findFirst({
      where: { id, deleted: false },
      include: {
        consultas: { omit: { deleted: true } },
      },
      omit: { deleted: true },
    });
  },
  create: async (
    nombres: string,
    apellidos: string,
    telefono: string,
    email: string,
    masculino: boolean,
    fechanacimiento: Date,
    tiposangre: string,
    alergias: string,
  ) => {
    return await prisma.paciente.create({
      data: {
        nombres,
        apellidos,
        telefono,
        email,
        masculino,
        fechanacimiento,
        tiposangre,
        alergias,
      },
      omit: { deleted: true },
    });
  },
  update: async (
    id: number,
    nombres: string,
    apellidos: string,
    telefono: string,
    email: string,
    masculino: boolean,
    fechanacimiento: Date,
    tiposangre: string,
    alergias: string,
  ) => {
    return await prisma.paciente.update({
      where: { id },
      data: {
        nombres,
        apellidos,
        telefono,
        email,
        masculino,
        fechanacimiento,
        tiposangre,
        alergias,
      },
      omit: { deleted: true },
    });
  },
  softDelete: async (id: number) => {
    return await prisma.paciente.update({
      where: { id },
      data: { deleted: true },
      omit: { deleted: true },
    });
  },
};
