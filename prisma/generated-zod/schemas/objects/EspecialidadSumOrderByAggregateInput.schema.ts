import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const EspecialidadSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadSumOrderByAggregateInput>;
export const EspecialidadSumOrderByAggregateInputObjectZodSchema = makeSchema();
