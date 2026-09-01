import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ConsultaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaOrderByRelationAggregateInput>;
export const ConsultaOrderByRelationAggregateInputObjectZodSchema = makeSchema();
