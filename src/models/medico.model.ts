import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";

export const medicoModel = {
  findAll: async (especialidadNombre?: string) => {
    const options: Prisma.MedicoFindManyArgs = {
      omit: { deleted: true, id_especialidad: true },
      include: { especialidad: { omit: { deleted: true } } },
      where: { deleted: false },
      orderBy: { id: "asc" },
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
      omit: { deleted: true, id_especialidad: true, id_usuario: true },
      include: { especialidad: { omit: { deleted: true } } },
    });
  },
  create: async ({
    nombres,
    apellidos,
    telefono,
    username,
    hashedPassword,
    email,
    masculino,
    fechanacimiento,
    id_especialidad,
  }: {
    nombres: string;
    apellidos: string;
    telefono: string;
    username: string;
    hashedPassword: string;
    email: string;
    masculino: boolean;
    fechanacimiento: Date;
    id_especialidad: number;
  }) => {
    return await prisma.medico.create({
      data: {
        nombres,
        apellidos,
        telefono,
        email,
        masculino,
        fechanacimiento,
        especialidad: { connect: { id: id_especialidad } },
        usuario: {
          create: { email, username, password: hashedPassword, role: "MEDICO" },
        },
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
    const medico = await prisma.medico.findUnique({
      where: { id, deleted: false },
    });
    if (!medico) {
      throw new Error("Médico no encontrado");
    }
    await prisma.consulta.updateMany({
      where: { id_medico: id, deleted: false },
      data: { deleted: true },
    });
    return await prisma.medico.update({
      where: { id },
      data: { deleted: true },
      include: { consultas: { omit: { deleted: true } } },
      omit: { deleted: true },
    });
  },
  deleteAdmin: async (id: number) => {
    return await prisma.medico.delete({
      where: { id },
    });
  },
  findAgendaByDate: async (id: number, fechaInicio?: Date, fechaFin?: Date) => {
    const options: Prisma.MedicoFindFirstArgs = {
      where: {
        id,
        deleted: false,
      },
      select: {
        nombres: true,
        apellidos: true,
        especialidad: { select: { tipo: true } },
        consultas: {
          select: {
            citadate: true,
            paciente: {
              select: {
                id: true,
                nombres: true,
                apellidos: true,
              },
            },
          },
          where: {} as Prisma.ConsultaWhereInput,
        },
      },
    };
    if (fechaInicio && fechaFin && options.select?.consultas) {
      (options.select.consultas as any).where = {
        citadate: {
          gte: fechaInicio,
          lte: fechaFin,
        },
      };
    }
    return await prisma.medico.findFirst(options);
  },
  findAllByIdEspecialidad: async (idEspecialidad: number) => {
    return await prisma.medico.findMany({
      where: { id_especialidad: idEspecialidad, deleted: false },
      select: { id: true, nombres: true, apellidos: true },
    });
  },
};
