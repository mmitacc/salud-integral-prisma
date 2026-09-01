import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadSelectObjectSchema as EspecialidadSelectObjectSchema } from './objects/EspecialidadSelect.schema';
import { EspecialidadIncludeObjectSchema as EspecialidadIncludeObjectSchema } from './objects/EspecialidadInclude.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './objects/EspecialidadWhereUniqueInput.schema';
import { EspecialidadCreateInputObjectSchema as EspecialidadCreateInputObjectSchema } from './objects/EspecialidadCreateInput.schema';
import { EspecialidadUncheckedCreateInputObjectSchema as EspecialidadUncheckedCreateInputObjectSchema } from './objects/EspecialidadUncheckedCreateInput.schema';
import { EspecialidadUpdateInputObjectSchema as EspecialidadUpdateInputObjectSchema } from './objects/EspecialidadUpdateInput.schema';
import { EspecialidadUncheckedUpdateInputObjectSchema as EspecialidadUncheckedUpdateInputObjectSchema } from './objects/EspecialidadUncheckedUpdateInput.schema';

export const EspecialidadUpsertOneSchema: z.ZodType<Prisma.EspecialidadUpsertArgs> = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), where: EspecialidadWhereUniqueInputObjectSchema, create: z.union([ EspecialidadCreateInputObjectSchema, EspecialidadUncheckedCreateInputObjectSchema ]), update: z.union([ EspecialidadUpdateInputObjectSchema, EspecialidadUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EspecialidadUpsertArgs>;

export const EspecialidadUpsertOneZodSchema = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), where: EspecialidadWhereUniqueInputObjectSchema, create: z.union([ EspecialidadCreateInputObjectSchema, EspecialidadUncheckedCreateInputObjectSchema ]), update: z.union([ EspecialidadUpdateInputObjectSchema, EspecialidadUncheckedUpdateInputObjectSchema ]) }).strict();