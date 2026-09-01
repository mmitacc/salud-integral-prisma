import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EspecialidadWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => EspecialidadWhereInputObjectSchema).optional()
}).strict();
export const EspecialidadScalarRelationFilterObjectSchema: z.ZodType<Prisma.EspecialidadScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadScalarRelationFilter>;
export const EspecialidadScalarRelationFilterObjectZodSchema = makeSchema();
