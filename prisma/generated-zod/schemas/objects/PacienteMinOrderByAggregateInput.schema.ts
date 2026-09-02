import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  nombres: SortOrderSchema.optional(),
  apellidos: SortOrderSchema.optional(),
  telefono: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  masculino: SortOrderSchema.optional(),
  fechanacimiento: SortOrderSchema.optional(),
  tiposangre: SortOrderSchema.optional(),
  alergias: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional()
}).strict();
export const PacienteMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PacienteMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteMinOrderByAggregateInput>;
export const PacienteMinOrderByAggregateInputObjectZodSchema = makeSchema();
