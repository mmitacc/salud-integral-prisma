import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional()
}).strict();
export const CitaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CitaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaMaxOrderByAggregateInput>;
export const CitaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
