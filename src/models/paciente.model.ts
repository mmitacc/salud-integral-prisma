import { prisma } from "../config/prisma";

export const pacienteModel = {
  findAll: async () => {
    return await prisma.paciente.findMany({ orderBy: { id: "asc" } });
  },
  findFirsft: async (id: number) => {
    return await prisma.paciente.findFirst({ where: { id } });
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
    });
  },
  delete: async (id: number) => {
    return await prisma.paciente.delete({
      where: { id },
    });
  },
};
