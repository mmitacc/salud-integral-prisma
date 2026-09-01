import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadSelectObjectSchema as EspecialidadSelectObjectSchema } from './objects/EspecialidadSelect.schema';
import { EspecialidadCreateManyInputObjectSchema as EspecialidadCreateManyInputObjectSchema } from './objects/EspecialidadCreateManyInput.schema';

export const EspecialidadCreateManyAndReturnSchema: z.ZodType<Prisma.EspecialidadCreateManyAndReturnArgs> = z.object({ select: EspecialidadSelectObjectSchema.optional(), data: z.union([ EspecialidadCreateManyInputObjectSchema, z.array(EspecialidadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EspecialidadCreateManyAndReturnArgs>;

export const EspecialidadCreateManyAndReturnZodSchema = z.object({ select: EspecialidadSelectObjectSchema.optional(), data: z.union([ EspecialidadCreateManyInputObjectSchema, z.array(EspecialidadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();