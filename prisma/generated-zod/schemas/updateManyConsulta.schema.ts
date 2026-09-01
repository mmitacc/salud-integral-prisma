import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaUpdateManyMutationInputObjectSchema as ConsultaUpdateManyMutationInputObjectSchema } from './objects/ConsultaUpdateManyMutationInput.schema';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';

export const ConsultaUpdateManySchema: z.ZodType<Prisma.ConsultaUpdateManyArgs> = z.object({ data: ConsultaUpdateManyMutationInputObjectSchema, where: ConsultaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaUpdateManyArgs>;

export const ConsultaUpdateManyZodSchema = z.object({ data: ConsultaUpdateManyMutationInputObjectSchema, where: ConsultaWhereInputObjectSchema.optional() }).strict();