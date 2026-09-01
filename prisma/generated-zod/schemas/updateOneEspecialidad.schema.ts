import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadSelectObjectSchema as EspecialidadSelectObjectSchema } from './objects/EspecialidadSelect.schema';
import { EspecialidadIncludeObjectSchema as EspecialidadIncludeObjectSchema } from './objects/EspecialidadInclude.schema';
import { EspecialidadUpdateInputObjectSchema as EspecialidadUpdateInputObjectSchema } from './objects/EspecialidadUpdateInput.schema';
import { EspecialidadUncheckedUpdateInputObjectSchema as EspecialidadUncheckedUpdateInputObjectSchema } from './objects/EspecialidadUncheckedUpdateInput.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './objects/EspecialidadWhereUniqueInput.schema';

export const EspecialidadUpdateOneSchema: z.ZodType<Prisma.EspecialidadUpdateArgs> = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), data: z.union([EspecialidadUpdateInputObjectSchema, EspecialidadUncheckedUpdateInputObjectSchema]), where: EspecialidadWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EspecialidadUpdateArgs>;

export const EspecialidadUpdateOneZodSchema = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), data: z.union([EspecialidadUpdateInputObjectSchema, EspecialidadUncheckedUpdateInputObjectSchema]), where: EspecialidadWhereUniqueInputObjectSchema }).strict();