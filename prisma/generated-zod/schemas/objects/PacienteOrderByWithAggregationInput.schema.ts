import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PacienteCountOrderByAggregateInputObjectSchema as PacienteCountOrderByAggregateInputObjectSchema } from './PacienteCountOrderByAggregateInput.schema';
import { PacienteAvgOrderByAggregateInputObjectSchema as PacienteAvgOrderByAggregateInputObjectSchema } from './PacienteAvgOrderByAggregateInput.schema';
import { PacienteMaxOrderByAggregateInputObjectSchema as PacienteMaxOrderByAggregateInputObjectSchema } from './PacienteMaxOrderByAggregateInput.schema';
import { PacienteMinOrderByAggregateInputObjectSchema as PacienteMinOrderByAggregateInputObjectSchema } from './PacienteMinOrderByAggregateInput.schema';
import { PacienteSumOrderByAggregateInputObjectSchema as PacienteSumOrderByAggregateInputObjectSchema } from './PacienteSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  nombres: SortOrderSchema.optional(),
  apellidos: SortOrderSchema.optional(),
  telefono: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  masculino: SortOrderSchema.optional(),
  fechanacimiento: SortOrderSchema.optional(),
  tiposangre: SortOrderSchema.optional(),
  alergias: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  _count: z.lazy(() => PacienteCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PacienteAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PacienteMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PacienteMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PacienteSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PacienteOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PacienteOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteOrderByWithAggregationInput>;
export const PacienteOrderByWithAggregationInputObjectZodSchema = makeSchema();
