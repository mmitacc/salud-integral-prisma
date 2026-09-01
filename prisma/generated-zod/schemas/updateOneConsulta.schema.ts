import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaSelectObjectSchema as ConsultaSelectObjectSchema } from './objects/ConsultaSelect.schema';
import { ConsultaIncludeObjectSchema as ConsultaIncludeObjectSchema } from './objects/ConsultaInclude.schema';
import { ConsultaUpdateInputObjectSchema as ConsultaUpdateInputObjectSchema } from './objects/ConsultaUpdateInput.schema';
import { ConsultaUncheckedUpdateInputObjectSchema as ConsultaUncheckedUpdateInputObjectSchema } from './objects/ConsultaUncheckedUpdateInput.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';

export const ConsultaUpdateOneSchema: z.ZodType<Prisma.ConsultaUpdateArgs> = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), data: z.union([ConsultaUpdateInputObjectSchema, ConsultaUncheckedUpdateInputObjectSchema]), where: ConsultaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConsultaUpdateArgs>;

export const ConsultaUpdateOneZodSchema = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), data: z.union([ConsultaUpdateInputObjectSchema, ConsultaUncheckedUpdateInputObjectSchema]), where: ConsultaWhereUniqueInputObjectSchema }).strict();