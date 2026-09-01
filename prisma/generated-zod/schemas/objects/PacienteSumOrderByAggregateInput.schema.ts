import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const PacienteSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PacienteSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteSumOrderByAggregateInput>;
export const PacienteSumOrderByAggregateInputObjectZodSchema = makeSchema();
