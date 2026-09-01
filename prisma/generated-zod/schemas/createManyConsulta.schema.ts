import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaCreateManyInputObjectSchema as ConsultaCreateManyInputObjectSchema } from './objects/ConsultaCreateManyInput.schema';

export const ConsultaCreateManySchema: z.ZodType<Prisma.ConsultaCreateManyArgs> = z.object({ data: z.union([ ConsultaCreateManyInputObjectSchema, z.array(ConsultaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaCreateManyArgs>;

export const ConsultaCreateManyZodSchema = z.object({ data: z.union([ ConsultaCreateManyInputObjectSchema, z.array(ConsultaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();