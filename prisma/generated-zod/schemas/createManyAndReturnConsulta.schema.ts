import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaSelectObjectSchema as ConsultaSelectObjectSchema } from './objects/ConsultaSelect.schema';
import { ConsultaCreateManyInputObjectSchema as ConsultaCreateManyInputObjectSchema } from './objects/ConsultaCreateManyInput.schema';

export const ConsultaCreateManyAndReturnSchema: z.ZodType<Prisma.ConsultaCreateManyAndReturnArgs> = z.object({ select: ConsultaSelectObjectSchema.optional(), data: z.union([ ConsultaCreateManyInputObjectSchema, z.array(ConsultaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaCreateManyAndReturnArgs>;

export const ConsultaCreateManyAndReturnZodSchema = z.object({ select: ConsultaSelectObjectSchema.optional(), data: z.union([ ConsultaCreateManyInputObjectSchema, z.array(ConsultaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();