import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EspecialidadWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => EspecialidadWhereInputObjectSchema).optional().nullable()
}).strict();
export const EspecialidadNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.EspecialidadNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadNullableScalarRelationFilter>;
export const EspecialidadNullableScalarRelationFilterObjectZodSchema = makeSchema();
