import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialSelectObjectSchema as HistorialSelectObjectSchema } from './objects/HistorialSelect.schema';
import { HistorialUpdateManyMutationInputObjectSchema as HistorialUpdateManyMutationInputObjectSchema } from './objects/HistorialUpdateManyMutationInput.schema';
import { HistorialWhereInputObjectSchema as HistorialWhereInputObjectSchema } from './objects/HistorialWhereInput.schema';

export const HistorialUpdateManyAndReturnSchema: z.ZodType<Prisma.HistorialUpdateManyAndReturnArgs> = z.object({ select: HistorialSelectObjectSchema.optional(), data: HistorialUpdateManyMutationInputObjectSchema, where: HistorialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HistorialUpdateManyAndReturnArgs>;

export const HistorialUpdateManyAndReturnZodSchema = z.object({ select: HistorialSelectObjectSchema.optional(), data: HistorialUpdateManyMutationInputObjectSchema, where: HistorialWhereInputObjectSchema.optional() }).strict();