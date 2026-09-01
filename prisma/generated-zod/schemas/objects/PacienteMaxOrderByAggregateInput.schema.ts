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
  fecha_nac: SortOrderSchema.optional(),
  tipoSangre: SortOrderSchema.optional(),
  alergias: SortOrderSchema.optional(),
  creado: SortOrderSchema.optional()
}).strict();
export const PacienteMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PacienteMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteMaxOrderByAggregateInput>;
export const PacienteMaxOrderByAggregateInputObjectZodSchema = makeSchema();
