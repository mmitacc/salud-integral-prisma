import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialSelectObjectSchema as HistorialSelectObjectSchema } from './objects/HistorialSelect.schema';
import { HistorialIncludeObjectSchema as HistorialIncludeObjectSchema } from './objects/HistorialInclude.schema';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './objects/HistorialWhereUniqueInput.schema';

export const HistorialDeleteOneSchema: z.ZodType<Prisma.HistorialDeleteArgs> = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), where: HistorialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HistorialDeleteArgs>;

export const HistorialDeleteOneZodSchema = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), where: HistorialWhereUniqueInputObjectSchema }).strict();