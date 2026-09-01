import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PacienteWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PacienteWhereInputObjectSchema).optional()
}).strict();
export const PacienteScalarRelationFilterObjectSchema: z.ZodType<Prisma.PacienteScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PacienteScalarRelationFilter>;
export const PacienteScalarRelationFilterObjectZodSchema = makeSchema();
