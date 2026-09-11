import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";
import type { Role } from "../../prisma/generated-zod/schemas";

export const usuarioModel = {
  findAllMedico: async (especialidadNombre?: string) => {
    const options: Prisma.UsuarioFindManyArgs = {
      where: { deleted: false, role: "MEDICO" },
      omit: { deleted: true, id_especialidad: true, password: true },
      include: { especialidad: { omit: { deleted: true } } },
      orderBy: { id: "asc" },
    };
    if (especialidadNombre) {
      options.where = {
        especialidad: {
          tipo: { contains: especialidadNombre, mode: "insensitive" },
        },
      };
    }
    return await prisma.usuario.findMany(options);
  },
  findAll: async () => {
    return await prisma.usuario.findMany({
      omit: { deleted: true, password: true, id_especialidad: true },
      include: { especialidad: { select: { tipo: true } } },
      orderBy: { id: "asc" },
    });
  },
  findFirst: async (id: number) => {
    return await prisma.usuario.findFirst({
      where: { id, deleted: false },
      omit: { deleted: true, id_especialidad: true, password: true },
      include: { especialidad: { omit: { deleted: true } } },
    });
  },
  create: async ({
    nombres,
    apellidos,
    telefono,
    username,
    role,
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
    role: Role;
    hashedPassword: string;
    email: string;
    masculino: boolean;
    fechanacimiento: Date;
    id_especialidad: number | null;
  }) => {
    return await prisma.usuario.create({
      data: {
        nombres,
        apellidos,
        telefono,
        email,
        masculino,
        fechanacimiento,
        id_especialidad,
        username,
        password: hashedPassword,
        role,
      },
      omit: { deleted: true, password: true },
    });
  },
  update: async (
    id: number,
    {
      nombres,
      apellidos,
      telefono,
      username,
      role,
      email,
      masculino,
      fechanacimiento,
      id_especialidad,
    }: {
      nombres: string;
      apellidos: string;
      telefono: string;
      username: string;
      role: Role;
      email: string;
      masculino: boolean;
      fechanacimiento: Date;
      id_especialidad: number;
    },
  ) => {
    return await prisma.usuario.update({
      where: { id, deleted: false },
      data: {
        nombres,
        apellidos,
        telefono,
        username,
        role,
        email,
        masculino,
        fechanacimiento,
        especialidad: { connect: { id: id_especialidad } },
      },
      omit: { deleted: true, password: true },
      include: { especialidad: { omit: { registerdate: true } } },
    });
  },
  softDelete: async (id: number) => {
    return await prisma.usuario.update({
      where: { id },
      data: { deleted: true },
      omit: { deleted: true, password: true },
    });
  },
  deleteAdmin: async (id: number) => {
    return await prisma.usuario.delete({
      where: { id },
    });
  },
  findAgendaByDate: async (id: number, fechaInicio?: Date, fechaFin?: Date) => {
    const options: Prisma.UsuarioFindFirstArgs = {
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
    return await prisma.usuario.findFirst(options);
  },
  findAllByIdEspecialidad: async (idEspecialidad: number) => {
    return await prisma.usuario.findMany({
      where: { id_especialidad: idEspecialidad, deleted: false },
      select: { id: true, nombres: true, apellidos: true },
    });
  },
};
