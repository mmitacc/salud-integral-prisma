import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialSelectObjectSchema as HistorialSelectObjectSchema } from './objects/HistorialSelect.schema';
import { HistorialIncludeObjectSchema as HistorialIncludeObjectSchema } from './objects/HistorialInclude.schema';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './objects/HistorialWhereUniqueInput.schema';

export const HistorialFindUniqueSchema: z.ZodType<Prisma.HistorialFindUniqueArgs> = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), where: HistorialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HistorialFindUniqueArgs>;

export const HistorialFindUniqueZodSchema = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), where: HistorialWhereUniqueInputObjectSchema }).strict();