import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialSelectObjectSchema as HistorialSelectObjectSchema } from './objects/HistorialSelect.schema';
import { HistorialIncludeObjectSchema as HistorialIncludeObjectSchema } from './objects/HistorialInclude.schema';
import { HistorialUpdateInputObjectSchema as HistorialUpdateInputObjectSchema } from './objects/HistorialUpdateInput.schema';
import { HistorialUncheckedUpdateInputObjectSchema as HistorialUncheckedUpdateInputObjectSchema } from './objects/HistorialUncheckedUpdateInput.schema';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './objects/HistorialWhereUniqueInput.schema';

export const HistorialUpdateOneSchema: z.ZodType<Prisma.HistorialUpdateArgs> = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), data: z.union([HistorialUpdateInputObjectSchema, HistorialUncheckedUpdateInputObjectSchema]), where: HistorialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HistorialUpdateArgs>;

export const HistorialUpdateOneZodSchema = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), data: z.union([HistorialUpdateInputObjectSchema, HistorialUncheckedUpdateInputObjectSchema]), where: HistorialWhereUniqueInputObjectSchema }).strict();