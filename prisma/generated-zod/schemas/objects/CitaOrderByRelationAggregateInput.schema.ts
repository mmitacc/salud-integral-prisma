import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CitaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CitaOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaOrderByRelationAggregateInput>;
export const CitaOrderByRelationAggregateInputObjectZodSchema = makeSchema();
