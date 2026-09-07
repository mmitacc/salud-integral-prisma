import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";
import { f } from "../schemas/paciente.schema/findManyPacienteschema";

export const pacienteModel = {
  findAll: async (page?: number, limit?: number, search?: string) => {
    return await prisma.paciente.paginate({
      page,  
      limit, 
      schema: PacienteSchema,
      orderBy: { id: "asc" },
      omit: { deleted: true },
      where: {
        deleted: false,
        ...(search && {
          OR: [
            { nombre: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
          ],
        }),
      },
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
  deleteAdmin: async (id: number) => {
    return await prisma.paciente.delete({
      where: { id },
    });
  },
  findOneAdmin: async (id: number) => {
    return await prisma.paciente.findUnique({
      where: { id },
    });
  },
  findAllDeleted: async (fechaInicio?: Date, fechaFin?: Date) => {
    const options: Prisma.PacienteFindManyArgs = {
      orderBy: { id: "asc" },
      include: { historiales: true, consultas: true },
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
    return await prisma.paciente.findMany(options);
  },
};
