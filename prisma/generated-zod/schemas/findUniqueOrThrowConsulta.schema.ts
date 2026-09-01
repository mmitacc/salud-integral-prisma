import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaSelectObjectSchema as ConsultaSelectObjectSchema } from './objects/ConsultaSelect.schema';
import { ConsultaIncludeObjectSchema as ConsultaIncludeObjectSchema } from './objects/ConsultaInclude.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';

export const ConsultaFindUniqueOrThrowSchema: z.ZodType<Prisma.ConsultaFindUniqueOrThrowArgs> = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), where: ConsultaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConsultaFindUniqueOrThrowArgs>;

export const ConsultaFindUniqueOrThrowZodSchema = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), where: ConsultaWhereUniqueInputObjectSchema }).strict();