import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  idPaciente: SortOrderSchema.optional(),
  pagoInicial: SortOrderSchema.optional()
}).strict();
export const CitaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CitaSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaSumOrderByAggregateInput>;
export const CitaSumOrderByAggregateInputObjectZodSchema = makeSchema();
