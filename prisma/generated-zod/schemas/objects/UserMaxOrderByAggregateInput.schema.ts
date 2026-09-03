import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  nombres: SortOrderSchema.optional(),
  apellidos: SortOrderSchema.optional(),
  telefono: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional()
}).strict();
export const UserMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserMaxOrderByAggregateInput>;
export const UserMaxOrderByAggregateInputObjectZodSchema = makeSchema();
