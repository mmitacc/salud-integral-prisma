import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MedicoOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MedicoOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoOrderByRelationAggregateInput>;
export const MedicoOrderByRelationAggregateInputObjectZodSchema = makeSchema();
