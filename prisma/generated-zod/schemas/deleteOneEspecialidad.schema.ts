import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadSelectObjectSchema as EspecialidadSelectObjectSchema } from './objects/EspecialidadSelect.schema';
import { EspecialidadIncludeObjectSchema as EspecialidadIncludeObjectSchema } from './objects/EspecialidadInclude.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './objects/EspecialidadWhereUniqueInput.schema';

export const EspecialidadDeleteOneSchema: z.ZodType<Prisma.EspecialidadDeleteArgs> = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), where: EspecialidadWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EspecialidadDeleteArgs>;

export const EspecialidadDeleteOneZodSchema = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), where: EspecialidadWhereUniqueInputObjectSchema }).strict();