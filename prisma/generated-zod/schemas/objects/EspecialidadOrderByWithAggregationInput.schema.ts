import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EspecialidadCountOrderByAggregateInputObjectSchema as EspecialidadCountOrderByAggregateInputObjectSchema } from './EspecialidadCountOrderByAggregateInput.schema';
import { EspecialidadAvgOrderByAggregateInputObjectSchema as EspecialidadAvgOrderByAggregateInputObjectSchema } from './EspecialidadAvgOrderByAggregateInput.schema';
import { EspecialidadMaxOrderByAggregateInputObjectSchema as EspecialidadMaxOrderByAggregateInputObjectSchema } from './EspecialidadMaxOrderByAggregateInput.schema';
import { EspecialidadMinOrderByAggregateInputObjectSchema as EspecialidadMinOrderByAggregateInputObjectSchema } from './EspecialidadMinOrderByAggregateInput.schema';
import { EspecialidadSumOrderByAggregateInputObjectSchema as EspecialidadSumOrderByAggregateInputObjectSchema } from './EspecialidadSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tipo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  _count: z.lazy(() => EspecialidadCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EspecialidadAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EspecialidadMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EspecialidadMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EspecialidadSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EspecialidadOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EspecialidadOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadOrderByWithAggregationInput>;
export const EspecialidadOrderByWithAggregationInputObjectZodSchema = makeSchema();
