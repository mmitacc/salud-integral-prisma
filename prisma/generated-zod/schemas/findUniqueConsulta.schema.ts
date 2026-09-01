import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaSelectObjectSchema as ConsultaSelectObjectSchema } from './objects/ConsultaSelect.schema';
import { ConsultaIncludeObjectSchema as ConsultaIncludeObjectSchema } from './objects/ConsultaInclude.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';

export const ConsultaFindUniqueSchema: z.ZodType<Prisma.ConsultaFindUniqueArgs> = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), where: ConsultaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConsultaFindUniqueArgs>;

export const ConsultaFindUniqueZodSchema = z.object({ select: ConsultaSelectObjectSchema.optional(), include: ConsultaIncludeObjectSchema.optional(), where: ConsultaWhereUniqueInputObjectSchema }).strict();