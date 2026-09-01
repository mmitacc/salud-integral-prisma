import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tipo: SortOrderSchema.optional(),
  creado: SortOrderSchema.optional()
}).strict();
export const EspecialidadMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadMinOrderByAggregateInput>;
export const EspecialidadMinOrderByAggregateInputObjectZodSchema = makeSchema();
