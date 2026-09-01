import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CitaCountOrderByAggregateInputObjectSchema as CitaCountOrderByAggregateInputObjectSchema } from './CitaCountOrderByAggregateInput.schema';
import { CitaAvgOrderByAggregateInputObjectSchema as CitaAvgOrderByAggregateInputObjectSchema } from './CitaAvgOrderByAggregateInput.schema';
import { CitaMaxOrderByAggregateInputObjectSchema as CitaMaxOrderByAggregateInputObjectSchema } from './CitaMaxOrderByAggregateInput.schema';
import { CitaMinOrderByAggregateInputObjectSchema as CitaMinOrderByAggregateInputObjectSchema } from './CitaMinOrderByAggregateInput.schema';
import { CitaSumOrderByAggregateInputObjectSchema as CitaSumOrderByAggregateInputObjectSchema } from './CitaSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  idPaciente: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  pagoInicial: SortOrderSchema.optional(),
  _count: z.lazy(() => CitaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CitaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CitaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CitaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CitaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CitaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CitaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaOrderByWithAggregationInput>;
export const CitaOrderByWithAggregationInputObjectZodSchema = makeSchema();
