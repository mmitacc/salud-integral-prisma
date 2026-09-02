import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  motivo: SortOrderSchema.optional(),
  antecedentes: SortOrderSchema.optional(),
  triaje: SortOrderSchema.optional(),
  diagnostico: SortOrderSchema.optional(),
  tratamiento: SortOrderSchema.optional(),
  receta: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional()
}).strict();
export const HistorialCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HistorialCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialCountOrderByAggregateInput>;
export const HistorialCountOrderByAggregateInputObjectZodSchema = makeSchema();
