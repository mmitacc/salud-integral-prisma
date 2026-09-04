import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ConsultaCountOrderByAggregateInputObjectSchema as ConsultaCountOrderByAggregateInputObjectSchema } from './ConsultaCountOrderByAggregateInput.schema';
import { ConsultaAvgOrderByAggregateInputObjectSchema as ConsultaAvgOrderByAggregateInputObjectSchema } from './ConsultaAvgOrderByAggregateInput.schema';
import { ConsultaMaxOrderByAggregateInputObjectSchema as ConsultaMaxOrderByAggregateInputObjectSchema } from './ConsultaMaxOrderByAggregateInput.schema';
import { ConsultaMinOrderByAggregateInputObjectSchema as ConsultaMinOrderByAggregateInputObjectSchema } from './ConsultaMinOrderByAggregateInput.schema';
import { ConsultaSumOrderByAggregateInputObjectSchema as ConsultaSumOrderByAggregateInputObjectSchema } from './ConsultaSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  id_medico: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  citadate: SortOrderSchema.optional(),
  costo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  _count: z.lazy(() => ConsultaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ConsultaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ConsultaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ConsultaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ConsultaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ConsultaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ConsultaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaOrderByWithAggregationInput>;
export const ConsultaOrderByWithAggregationInputObjectZodSchema = makeSchema();
