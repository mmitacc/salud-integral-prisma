import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_especialidad: SortOrderSchema.optional(),
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
  deleted: SortOrderSchema.optional()
}).strict();
export const UsuarioMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioMinOrderByAggregateInput>;
export const UsuarioMinOrderByAggregateInputObjectZodSchema = makeSchema();
