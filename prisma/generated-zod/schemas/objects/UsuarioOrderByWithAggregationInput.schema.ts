import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UsuarioCountOrderByAggregateInputObjectSchema as UsuarioCountOrderByAggregateInputObjectSchema } from './UsuarioCountOrderByAggregateInput.schema';
import { UsuarioAvgOrderByAggregateInputObjectSchema as UsuarioAvgOrderByAggregateInputObjectSchema } from './UsuarioAvgOrderByAggregateInput.schema';
import { UsuarioMaxOrderByAggregateInputObjectSchema as UsuarioMaxOrderByAggregateInputObjectSchema } from './UsuarioMaxOrderByAggregateInput.schema';
import { UsuarioMinOrderByAggregateInputObjectSchema as UsuarioMinOrderByAggregateInputObjectSchema } from './UsuarioMinOrderByAggregateInput.schema';
import { UsuarioSumOrderByAggregateInputObjectSchema as UsuarioSumOrderByAggregateInputObjectSchema } from './UsuarioSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_especialidad: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nombres: SortOrderSchema.optional(),
  apellidos: SortOrderSchema.optional(),
  telefono: SortOrderSchema.optional(),
  masculino: SortOrderSchema.optional(),
  fechanacimiento: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  _count: z.lazy(() => UsuarioCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UsuarioAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UsuarioMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UsuarioMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UsuarioSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UsuarioOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UsuarioOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioOrderByWithAggregationInput>;
export const UsuarioOrderByWithAggregationInputObjectZodSchema = makeSchema();
