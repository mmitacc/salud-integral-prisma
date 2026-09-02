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
export const PacienteCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PacienteCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCountOrderByAggregateInput>;
export const PacienteCountOrderByAggregateInputObjectZodSchema = makeSchema();
