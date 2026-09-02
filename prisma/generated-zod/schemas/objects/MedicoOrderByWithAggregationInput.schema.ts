import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MedicoCountOrderByAggregateInputObjectSchema as MedicoCountOrderByAggregateInputObjectSchema } from './MedicoCountOrderByAggregateInput.schema';
import { MedicoAvgOrderByAggregateInputObjectSchema as MedicoAvgOrderByAggregateInputObjectSchema } from './MedicoAvgOrderByAggregateInput.schema';
import { MedicoMaxOrderByAggregateInputObjectSchema as MedicoMaxOrderByAggregateInputObjectSchema } from './MedicoMaxOrderByAggregateInput.schema';
import { MedicoMinOrderByAggregateInputObjectSchema as MedicoMinOrderByAggregateInputObjectSchema } from './MedicoMinOrderByAggregateInput.schema';
import { MedicoSumOrderByAggregateInputObjectSchema as MedicoSumOrderByAggregateInputObjectSchema } from './MedicoSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_especialidad: SortOrderSchema.optional(),
  nombres: SortOrderSchema.optional(),
  apellidos: SortOrderSchema.optional(),
  telefono: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  masculino: SortOrderSchema.optional(),
  fechanacimiento: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  _count: z.lazy(() => MedicoCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MedicoAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MedicoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MedicoMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MedicoSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MedicoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MedicoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoOrderByWithAggregationInput>;
export const MedicoOrderByWithAggregationInputObjectZodSchema = makeSchema();
