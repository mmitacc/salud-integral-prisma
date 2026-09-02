import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  pagoinicial: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional()
}).strict();
export const CitaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CitaCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCountOrderByAggregateInput>;
export const CitaCountOrderByAggregateInputObjectZodSchema = makeSchema();
