import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaSelectObjectSchema as ConsultaSelectObjectSchema } from './objects/ConsultaSelect.schema';
import { ConsultaIncludeObjectSchema as ConsultaIncludeObjectSchema } from './objects/ConsultaInclude.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';
import { ConsultaCreateInputObjectSchema as ConsultaCreateInputObjectSchema } from './objects/ConsultaCreateInput.schema';
import { ConsultaUncheckedCreateInputObjectSchema as ConsultaUncheckedCreateInputObjectSchema } from './objects/ConsultaUncheckedCreateInput.schema';
import { ConsultaUpdateInputObjectSchema as ConsultaUpdateInputObjectSchema } from './objects/ConsultaUpdateInput.schema';
import { ConsultaUncheckedUpdateInputObjectSchema as ConsultaUncheckedUpdateInputObjectSchema } from './objects/ConsultaUncheckedUpdateInput.schema';

export const ConsultaUpsertOneSchema: z.ZodType<Prisma.ConsultaUpsertArgs> = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), where: ConsultaWhereUniqueInputObjectSchema, create: z.union([ ConsultaCreateInputObjectSchema, ConsultaUncheckedCreateInputObjectSchema ]), update: z.union([ ConsultaUpdateInputObjectSchema, ConsultaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ConsultaUpsertArgs>;

export const ConsultaUpsertOneZodSchema = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), where: ConsultaWhereUniqueInputObjectSchema, create: z.union([ ConsultaCreateInputObjectSchema, ConsultaUncheckedCreateInputObjectSchema ]), update: z.union([ ConsultaUpdateInputObjectSchema, ConsultaUncheckedUpdateInputObjectSchema ]) }).strict();