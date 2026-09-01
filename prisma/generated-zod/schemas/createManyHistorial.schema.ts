import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialCreateManyInputObjectSchema as HistorialCreateManyInputObjectSchema } from './objects/HistorialCreateManyInput.schema';

export const HistorialCreateManySchema: z.ZodType<Prisma.HistorialCreateManyArgs> = z.object({ data: z.union([ HistorialCreateManyInputObjectSchema, z.array(HistorialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HistorialCreateManyArgs>;

export const HistorialCreateManyZodSchema = z.object({ data: z.union([ HistorialCreateManyInputObjectSchema, z.array(HistorialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();