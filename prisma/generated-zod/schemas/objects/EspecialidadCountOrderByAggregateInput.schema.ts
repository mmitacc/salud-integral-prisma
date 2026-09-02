import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tipo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional()
}).strict();
export const EspecialidadCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCountOrderByAggregateInput>;
export const EspecialidadCountOrderByAggregateInputObjectZodSchema = makeSchema();
