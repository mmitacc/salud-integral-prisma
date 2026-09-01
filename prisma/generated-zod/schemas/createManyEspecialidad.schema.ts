import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadCreateManyInputObjectSchema as EspecialidadCreateManyInputObjectSchema } from './objects/EspecialidadCreateManyInput.schema';

export const EspecialidadCreateManySchema: z.ZodType<Prisma.EspecialidadCreateManyArgs> = z.object({ data: z.union([ EspecialidadCreateManyInputObjectSchema, z.array(EspecialidadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EspecialidadCreateManyArgs>;

export const EspecialidadCreateManyZodSchema = z.object({ data: z.union([ EspecialidadCreateManyInputObjectSchema, z.array(EspecialidadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();