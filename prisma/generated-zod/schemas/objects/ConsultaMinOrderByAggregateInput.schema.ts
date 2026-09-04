import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  id_medico: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  citadate: SortOrderSchema.optional(),
  costo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional()
}).strict();
export const ConsultaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaMinOrderByAggregateInput>;
export const ConsultaMinOrderByAggregateInputObjectZodSchema = makeSchema();
