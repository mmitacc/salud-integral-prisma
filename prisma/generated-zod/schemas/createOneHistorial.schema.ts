import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialSelectObjectSchema as HistorialSelectObjectSchema } from './objects/HistorialSelect.schema';
import { HistorialIncludeObjectSchema as HistorialIncludeObjectSchema } from './objects/HistorialInclude.schema';
import { HistorialCreateInputObjectSchema as HistorialCreateInputObjectSchema } from './objects/HistorialCreateInput.schema';
import { HistorialUncheckedCreateInputObjectSchema as HistorialUncheckedCreateInputObjectSchema } from './objects/HistorialUncheckedCreateInput.schema';

export const HistorialCreateOneSchema: z.ZodType<Prisma.HistorialCreateArgs> = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), data: z.union([HistorialCreateInputObjectSchema, HistorialUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.HistorialCreateArgs>;

export const HistorialCreateOneZodSchema = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), data: z.union([HistorialCreateInputObjectSchema, HistorialUncheckedCreateInputObjectSchema]) }).strict();