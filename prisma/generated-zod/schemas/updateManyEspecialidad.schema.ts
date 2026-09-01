import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadUpdateManyMutationInputObjectSchema as EspecialidadUpdateManyMutationInputObjectSchema } from './objects/EspecialidadUpdateManyMutationInput.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './objects/EspecialidadWhereInput.schema';

export const EspecialidadUpdateManySchema: z.ZodType<Prisma.EspecialidadUpdateManyArgs> = z.object({ data: EspecialidadUpdateManyMutationInputObjectSchema, where: EspecialidadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EspecialidadUpdateManyArgs>;

export const EspecialidadUpdateManyZodSchema = z.object({ data: EspecialidadUpdateManyMutationInputObjectSchema, where: EspecialidadWhereInputObjectSchema.optional() }).strict();