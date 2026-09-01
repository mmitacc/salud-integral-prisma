import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  idCita: SortOrderSchema.optional(),
  idMedico: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  horario: SortOrderSchema.optional(),
  costo: SortOrderSchema.optional(),
  creado: SortOrderSchema.optional()
}).strict();
export const ConsultaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCountOrderByAggregateInput>;
export const ConsultaCountOrderByAggregateInputObjectZodSchema = makeSchema();
