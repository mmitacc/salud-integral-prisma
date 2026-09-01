import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadSelectObjectSchema as EspecialidadSelectObjectSchema } from './objects/EspecialidadSelect.schema';
import { EspecialidadUpdateManyMutationInputObjectSchema as EspecialidadUpdateManyMutationInputObjectSchema } from './objects/EspecialidadUpdateManyMutationInput.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './objects/EspecialidadWhereInput.schema';

export const EspecialidadUpdateManyAndReturnSchema: z.ZodType<Prisma.EspecialidadUpdateManyAndReturnArgs> = z.object({ select: EspecialidadSelectObjectSchema.optional(), data: EspecialidadUpdateManyMutationInputObjectSchema, where: EspecialidadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EspecialidadUpdateManyAndReturnArgs>;

export const EspecialidadUpdateManyAndReturnZodSchema = z.object({ select: EspecialidadSelectObjectSchema.optional(), data: EspecialidadUpdateManyMutationInputObjectSchema, where: EspecialidadWhereInputObjectSchema.optional() }).strict();