import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaSelectObjectSchema as CitaSelectObjectSchema } from './objects/CitaSelect.schema';
import { CitaCreateManyInputObjectSchema as CitaCreateManyInputObjectSchema } from './objects/CitaCreateManyInput.schema';

export const CitaCreateManyAndReturnSchema: z.ZodType<Prisma.CitaCreateManyAndReturnArgs> = z.object({ select: CitaSelectObjectSchema.optional(), data: z.union([ CitaCreateManyInputObjectSchema, z.array(CitaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CitaCreateManyAndReturnArgs>;

export const CitaCreateManyAndReturnZodSchema = z.object({ select: CitaSelectObjectSchema.optional(), data: z.union([ CitaCreateManyInputObjectSchema, z.array(CitaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();