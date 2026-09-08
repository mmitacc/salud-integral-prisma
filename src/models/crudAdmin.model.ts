import { Prisma } from "../../prisma/generated-client/client";
import { prisma } from "../config/prisma";

export const crudAdmin = {
//   findAll: async (modelo: string) => {
//     return await (prisma as any)[modelo].findMany({
//       orderBy: { id: "asc" },
//     });
//   },
  findAllDeleted: async (
    modelo: string,
    deleted: boolean,
    fechaInicio?: Date,
    fechaFin?: Date,
  ) => {
    const options: Prisma.ConsultaFindManyArgs = {
      where: { deleted: deleted },
      orderBy: { id: "asc" },
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
    return await (prisma as any)[modelo].findMany(options);
  },
  findFirst: async (modelo: string, id: number) => {
    return await (prisma as any)[modelo].findFirst({
      where: { id },
    });
  },
  updateDeleted: async (modelo: string, id: number) => {
    return await (prisma as any)[modelo].update({
      where: { id },
      data: { deleted: false },
    });
  },
  deleteReal: async (modelo: string, id: number) => {
    return await (prisma as any)[modelo].delete({
      where: { id },
    });
  },
};
