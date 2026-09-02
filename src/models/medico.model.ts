import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";

export const medicoModel = {
  findAll: async (especialidadNombre?: string) => {
    const options: Prisma.MedicoFindManyArgs = {
      orderBy: { id: "asc" },
      omit: { deleted: true },
      include: { especialidad: { omit: { deleted: true } } },
      where: { deleted: false },
    };
    if (especialidadNombre) {
      options.where = {
        especialidad: {
          tipo: { equals: especialidadNombre, mode: "insensitive" },
        },
      };
    }
    return await prisma.medico.findMany(options);
  },
  findFirst: async (id: number) => {
    return await prisma.medico.findFirst({
      where: { id, deleted: false },
      omit: { deleted: true },
      include: { especialidad: { omit: { deleted: true } } },
    });
  },
  create: async (
    nombres: string,
    apellidos: string,
    telefono: string,
    email: string,
    masculino: boolean,
    fechanacimiento: Date,
    id_especialidad: number,
  ) => {
    return await prisma.medico.create({
      data: {
        nombres,
        apellidos,
        telefono,
        email,
        masculino,
        fechanacimiento,
        id_especialidad,
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
    id_especialidad: number,
  ) => {
    return await prisma.medico.update({
      where: { id, deleted: false },
      data: {
        nombres,
        apellidos,
        telefono,
        email,
        masculino,
        fechanacimiento,
        especialidad: { connect: { id: id_especialidad } },
      },
      omit: { deleted: true },
    });
  },
  softDelete: async (id: number) => {
    return await prisma.medico.update({
      where: { id, deleted: false },
      data: { deleted: true },
      omit: { deleted: true },
    });
  },
  deleteAdmin: async (id: number) => {
    return await prisma.medico.delete({
      where: { id },
    });
  },
  findAllDeleted: async (fechaInicio?: Date, fechaFin?: Date) => {
    const options: Prisma.MedicoFindManyArgs = {
      orderBy: { id: "asc" },
      include: { especialidad: true },
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
    return await prisma.medico.findMany(options);
  },
};
