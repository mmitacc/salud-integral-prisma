import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  id_usuario: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  citadate: SortOrderSchema.optional(),
  costo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional()
}).strict();
export const ConsultaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaMaxOrderByAggregateInput>;
export const ConsultaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
