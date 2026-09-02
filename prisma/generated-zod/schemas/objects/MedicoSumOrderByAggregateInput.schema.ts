import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_especialidad: SortOrderSchema.optional()
}).strict();
export const MedicoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MedicoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoSumOrderByAggregateInput>;
export const MedicoSumOrderByAggregateInputObjectZodSchema = makeSchema();
