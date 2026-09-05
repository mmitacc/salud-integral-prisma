import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MedicoWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MedicoWhereInputObjectSchema).optional().nullable()
}).strict();
export const MedicoNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MedicoNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MedicoNullableScalarRelationFilter>;
export const MedicoNullableScalarRelationFilterObjectZodSchema = makeSchema();
