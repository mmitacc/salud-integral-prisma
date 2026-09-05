import type { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";

enum ROLE {
  RECEPCIONISTA = "RECEPCIONISTA",
  MEDICO = "MEDICO",
  GERENCIA = "GERENCIA",
  ADMIN = "ADMIN",
}

export const usuarioModel = {
  findAll: async () => {
    return await prisma.usuario.findMany({
      where: { deleted: false },
      orderBy: { id: "asc" },
      omit: { deleted: true, password: true },
    });
  },
  findFirst: async (id: number) => {
    return await prisma.usuario.findFirst({
      where: { id, deleted: false },
      omit: { deleted: true },
    });
  },
  update: async (id: number, email: string, role: ROLE, username: string) => {
    return await prisma.usuario.update({
      where: { id },
      data: {
        email,
        role,
        username,
      },
      omit: { deleted: true, password: true },
    });
  },
  updatePassword: async (id: number, hashedPassword: string) => {
    return await prisma.usuario.update({
      where: { id },
      data: {
        password: hashedPassword,
      },
      select: { username: true, email: true },
    });
  },
  softDelete: async (id: number) => {
    return await prisma.usuario.update({
      where: { id },
      data: {
        deleted: true,
      },
      omit: { deleted: true, password: true },
    });
  },
  deleteAdmin: async (id: number) => {
    return await prisma.especialidad.delete({
      where: { id },
    });
  },
  findAllDeleted: async (fechaInicio?: Date, fechaFin?: Date) => {
    const options: Prisma.EspecialidadFindManyArgs = {
      orderBy: { id: "asc" },
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
    return await prisma.especialidad.findMany(options);
  },
};
