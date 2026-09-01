import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  idEspecialidad: SortOrderSchema.optional()
}).strict();
export const MedicoAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MedicoAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoAvgOrderByAggregateInput>;
export const MedicoAvgOrderByAggregateInputObjectZodSchema = makeSchema();
