import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialUpdateManyMutationInputObjectSchema as HistorialUpdateManyMutationInputObjectSchema } from './objects/HistorialUpdateManyMutationInput.schema';
import { HistorialWhereInputObjectSchema as HistorialWhereInputObjectSchema } from './objects/HistorialWhereInput.schema';

export const HistorialUpdateManySchema: z.ZodType<Prisma.HistorialUpdateManyArgs> = z.object({ data: HistorialUpdateManyMutationInputObjectSchema, where: HistorialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HistorialUpdateManyArgs>;

export const HistorialUpdateManyZodSchema = z.object({ data: HistorialUpdateManyMutationInputObjectSchema, where: HistorialWhereInputObjectSchema.optional() }).strict();