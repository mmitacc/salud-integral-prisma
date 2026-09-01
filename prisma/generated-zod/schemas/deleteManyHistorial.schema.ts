import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialWhereInputObjectSchema as HistorialWhereInputObjectSchema } from './objects/HistorialWhereInput.schema';

export const HistorialDeleteManySchema: z.ZodType<Prisma.HistorialDeleteManyArgs> = z.object({ where: HistorialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HistorialDeleteManyArgs>;

export const HistorialDeleteManyZodSchema = z.object({ where: HistorialWhereInputObjectSchema.optional() }).strict();