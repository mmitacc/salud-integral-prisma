import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './CitaWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CitaWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CitaWhereInputObjectSchema).optional()
}).strict();
export const CitaScalarRelationFilterObjectSchema: z.ZodType<Prisma.CitaScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CitaScalarRelationFilter>;
export const CitaScalarRelationFilterObjectZodSchema = makeSchema();
