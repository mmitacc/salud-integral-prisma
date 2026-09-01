import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaCreateManyInputObjectSchema as CitaCreateManyInputObjectSchema } from './objects/CitaCreateManyInput.schema';

export const CitaCreateManySchema: z.ZodType<Prisma.CitaCreateManyArgs> = z.object({ data: z.union([ CitaCreateManyInputObjectSchema, z.array(CitaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CitaCreateManyArgs>;

export const CitaCreateManyZodSchema = z.object({ data: z.union([ CitaCreateManyInputObjectSchema, z.array(CitaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();