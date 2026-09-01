import { prisma } from "../config/prisma";

export const pacienteModel = {
  findAll: async () => {
    return await prisma.paciente.findMany({ orderBy: { id: "asc" } });
  },
  create: async (
    nombres: string,
    apellidos: string,
    telefono: string,
    email: string,
    masculino: boolean,
    fecha_nac: Date,
    tipo_sangre: string,
    alergias: string,
  ) => {
    return await prisma.paciente.create({
      data: {
        nombres,
        apellidos,
        telefono,
        email,
        masculino,
        fecha_nac,
        tipo_sangre,
        alergias,
      },
    });
  },
};
