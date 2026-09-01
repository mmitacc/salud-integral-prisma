import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadSelectObjectSchema as EspecialidadSelectObjectSchema } from './objects/EspecialidadSelect.schema';
import { EspecialidadIncludeObjectSchema as EspecialidadIncludeObjectSchema } from './objects/EspecialidadInclude.schema';
import { EspecialidadCreateInputObjectSchema as EspecialidadCreateInputObjectSchema } from './objects/EspecialidadCreateInput.schema';
import { EspecialidadUncheckedCreateInputObjectSchema as EspecialidadUncheckedCreateInputObjectSchema } from './objects/EspecialidadUncheckedCreateInput.schema';

export const EspecialidadCreateOneSchema: z.ZodType<Prisma.EspecialidadCreateArgs> = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), data: z.union([EspecialidadCreateInputObjectSchema, EspecialidadUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EspecialidadCreateArgs>;

export const EspecialidadCreateOneZodSchema = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), data: z.union([EspecialidadCreateInputObjectSchema, EspecialidadUncheckedCreateInputObjectSchema]) }).strict();