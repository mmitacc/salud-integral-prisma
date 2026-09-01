import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional()
}).strict();
export const CitaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CitaAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaAvgOrderByAggregateInput>;
export const CitaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
