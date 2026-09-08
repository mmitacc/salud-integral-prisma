import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated-client/client";
import { z } from "zod";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prismaClient = new PrismaClient({ adapter });

// Fábrica interna dinámica para las respuestas de cualquier tabla
function createPaginatedResponseSchema<T extends z.ZodType>(modelSchema: T) {
  return z.object({
    data: z.array(modelSchema),
    meta: z.object({
      total: z.number(),
      page: z.number(),
      lastPage: z.number(),
      limit: z.number(),
    }),
  });
}

// Exportamos este cliente extendido en lugar del PrismaClient común
export const prisma = prismaClient.$extends({
  model: {
    $allModels: {
      async paginate<T, M>(
        this: T,
        args: {
          where?: any;
          orderBy?: any;
          omit?: any;
          include?: any;
          page?: number;
          limit?: number;
          schema: z.ZodType<M>;
        },
      ) {
        const context = this as any;

        // Comportamiento "Traer todos" si no pasan parámetros
        if (args.page === undefined && args.limit === undefined) {
          const rawData = await context.findMany({
            where: args.where,
            orderBy: args.orderBy,
            omit: args.omit,
            include: args.include,
          });
          return z.array(args.schema).parse(rawData);
        }

        // Comportamiento "Paginado" si se pasan parámetros
        const page = Math.max(1, args.page ?? 1);
        const limit = Math.max(1, args.limit ?? 10);
        const skip = (page - 1) * limit;

        const [total, data] = await prismaClient.$transaction([
          context.count({ where: args.where }),
          context.findMany({
            where: args.where,
            orderBy: args.orderBy,
            omit: args.omit,
            include: args.include,
            skip,
            take: limit,
          }),
        ]);

        const responseStructure = {
          data,
          meta: { total, page, lastPage: Math.ceil(total / limit) || 1, limit },
        };

        return createPaginatedResponseSchema(args.schema).parse(
          responseStructure,
        );
      },
    },
  },
});

// Extraemos todas las llaves del objeto cliente
const todosLosMetodos = Object.keys(prismaClient);
// Filtramos y nos quedamos solo con los nombres de los modelos
export const MODELOS_PERMITIDOS = todosLosMetodos.filter(
  (key) =>
    !key.startsWith("$") && !key.startsWith("_") && key !== "constructor",
);
