import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional()
}).strict();
export const UsuarioMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioMaxOrderByAggregateInput>;
export const UsuarioMaxOrderByAggregateInputObjectZodSchema = makeSchema();
