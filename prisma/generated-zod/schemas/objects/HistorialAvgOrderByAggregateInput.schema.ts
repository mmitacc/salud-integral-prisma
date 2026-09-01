import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  idPaciente: SortOrderSchema.optional()
}).strict();
export const HistorialAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HistorialAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialAvgOrderByAggregateInput>;
export const HistorialAvgOrderByAggregateInputObjectZodSchema = makeSchema();
