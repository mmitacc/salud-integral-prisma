import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaSelectObjectSchema as CitaSelectObjectSchema } from './objects/CitaSelect.schema';
import { CitaIncludeObjectSchema as CitaIncludeObjectSchema } from './objects/CitaInclude.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './objects/CitaWhereUniqueInput.schema';

export const CitaDeleteOneSchema: z.ZodType<Prisma.CitaDeleteArgs> = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), where: CitaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CitaDeleteArgs>;

export const CitaDeleteOneZodSchema = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), where: CitaWhereUniqueInputObjectSchema }).strict();