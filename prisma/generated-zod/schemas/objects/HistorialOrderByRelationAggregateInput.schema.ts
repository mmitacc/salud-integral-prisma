import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const HistorialOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.HistorialOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialOrderByRelationAggregateInput>;
export const HistorialOrderByRelationAggregateInputObjectZodSchema = makeSchema();
