import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MedicoWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MedicoWhereInputObjectSchema).optional()
}).strict();
export const MedicoScalarRelationFilterObjectSchema: z.ZodType<Prisma.MedicoScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MedicoScalarRelationFilter>;
export const MedicoScalarRelationFilterObjectZodSchema = makeSchema();
