import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaSelectObjectSchema as ConsultaSelectObjectSchema } from './objects/ConsultaSelect.schema';
import { ConsultaUpdateManyMutationInputObjectSchema as ConsultaUpdateManyMutationInputObjectSchema } from './objects/ConsultaUpdateManyMutationInput.schema';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';

export const ConsultaUpdateManyAndReturnSchema: z.ZodType<Prisma.ConsultaUpdateManyAndReturnArgs> = z.object({ select: ConsultaSelectObjectSchema.optional(), data: ConsultaUpdateManyMutationInputObjectSchema, where: ConsultaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaUpdateManyAndReturnArgs>;

export const ConsultaUpdateManyAndReturnZodSchema = z.object({ select: ConsultaSelectObjectSchema.optional(), data: ConsultaUpdateManyMutationInputObjectSchema, where: ConsultaWhereInputObjectSchema.optional() }).strict();