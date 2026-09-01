import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const PacienteAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PacienteAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteAvgOrderByAggregateInput>;
export const PacienteAvgOrderByAggregateInputObjectZodSchema = makeSchema();
