import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional()
}).strict();
export const HistorialSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HistorialSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialSumOrderByAggregateInput>;
export const HistorialSumOrderByAggregateInputObjectZodSchema = makeSchema();
