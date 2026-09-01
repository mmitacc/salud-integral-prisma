import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { HistorialCountOrderByAggregateInputObjectSchema as HistorialCountOrderByAggregateInputObjectSchema } from './HistorialCountOrderByAggregateInput.schema';
import { HistorialAvgOrderByAggregateInputObjectSchema as HistorialAvgOrderByAggregateInputObjectSchema } from './HistorialAvgOrderByAggregateInput.schema';
import { HistorialMaxOrderByAggregateInputObjectSchema as HistorialMaxOrderByAggregateInputObjectSchema } from './HistorialMaxOrderByAggregateInput.schema';
import { HistorialMinOrderByAggregateInputObjectSchema as HistorialMinOrderByAggregateInputObjectSchema } from './HistorialMinOrderByAggregateInput.schema';
import { HistorialSumOrderByAggregateInputObjectSchema as HistorialSumOrderByAggregateInputObjectSchema } from './HistorialSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  idPaciente: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  motivo: SortOrderSchema.optional(),
  antecedentes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  triaje: SortOrderSchema.optional(),
  diagnostico: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tratamiento: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  receta: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => HistorialCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => HistorialAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => HistorialMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => HistorialMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => HistorialSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const HistorialOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.HistorialOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialOrderByWithAggregationInput>;
export const HistorialOrderByWithAggregationInputObjectZodSchema = makeSchema();
