import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const EspecialidadAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadAvgOrderByAggregateInput>;
export const EspecialidadAvgOrderByAggregateInputObjectZodSchema = makeSchema();
