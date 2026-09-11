import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_especialidad: SortOrderSchema.optional()
}).strict();
export const UsuarioSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioSumOrderByAggregateInput>;
export const UsuarioSumOrderByAggregateInputObjectZodSchema = makeSchema();
