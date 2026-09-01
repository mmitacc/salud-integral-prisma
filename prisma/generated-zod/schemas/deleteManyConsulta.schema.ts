import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';

export const ConsultaDeleteManySchema: z.ZodType<Prisma.ConsultaDeleteManyArgs> = z.object({ where: ConsultaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaDeleteManyArgs>;

export const ConsultaDeleteManyZodSchema = z.object({ where: ConsultaWhereInputObjectSchema.optional() }).strict();