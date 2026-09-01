import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadSelectObjectSchema as EspecialidadSelectObjectSchema } from './objects/EspecialidadSelect.schema';
import { EspecialidadIncludeObjectSchema as EspecialidadIncludeObjectSchema } from './objects/EspecialidadInclude.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './objects/EspecialidadWhereUniqueInput.schema';

export const EspecialidadFindUniqueSchema: z.ZodType<Prisma.EspecialidadFindUniqueArgs> = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), where: EspecialidadWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EspecialidadFindUniqueArgs>;

export const EspecialidadFindUniqueZodSchema = z.object({ select: EspecialidadSelectObjectSchema.optional(), include: EspecialidadIncludeObjectSchema.optional(), where: EspecialidadWhereUniqueInputObjectSchema }).strict();