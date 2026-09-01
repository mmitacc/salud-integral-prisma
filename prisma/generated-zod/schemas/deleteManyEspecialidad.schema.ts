import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './objects/EspecialidadWhereInput.schema';

export const EspecialidadDeleteManySchema: z.ZodType<Prisma.EspecialidadDeleteManyArgs> = z.object({ where: EspecialidadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EspecialidadDeleteManyArgs>;

export const EspecialidadDeleteManyZodSchema = z.object({ where: EspecialidadWhereInputObjectSchema.optional() }).strict();