import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaSelectObjectSchema as ConsultaSelectObjectSchema } from './objects/ConsultaSelect.schema';
import { ConsultaIncludeObjectSchema as ConsultaIncludeObjectSchema } from './objects/ConsultaInclude.schema';
import { ConsultaCreateInputObjectSchema as ConsultaCreateInputObjectSchema } from './objects/ConsultaCreateInput.schema';
import { ConsultaUncheckedCreateInputObjectSchema as ConsultaUncheckedCreateInputObjectSchema } from './objects/ConsultaUncheckedCreateInput.schema';

export const ConsultaCreateOneSchema: z.ZodType<Prisma.ConsultaCreateArgs> = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), data: z.union([ConsultaCreateInputObjectSchema, ConsultaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ConsultaCreateArgs>;

export const ConsultaCreateOneZodSchema = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), data: z.union([ConsultaCreateInputObjectSchema, ConsultaUncheckedCreateInputObjectSchema]) }).strict();