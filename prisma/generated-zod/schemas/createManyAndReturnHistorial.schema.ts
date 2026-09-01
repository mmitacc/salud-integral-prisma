import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialSelectObjectSchema as HistorialSelectObjectSchema } from './objects/HistorialSelect.schema';
import { HistorialCreateManyInputObjectSchema as HistorialCreateManyInputObjectSchema } from './objects/HistorialCreateManyInput.schema';

export const HistorialCreateManyAndReturnSchema: z.ZodType<Prisma.HistorialCreateManyAndReturnArgs> = z.object({ select: HistorialSelectObjectSchema.optional(), data: z.union([ HistorialCreateManyInputObjectSchema, z.array(HistorialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HistorialCreateManyAndReturnArgs>;

export const HistorialCreateManyAndReturnZodSchema = z.object({ select: HistorialSelectObjectSchema.optional(), data: z.union([ HistorialCreateManyInputObjectSchema, z.array(HistorialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();