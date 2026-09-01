import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  idCita: SortOrderSchema.optional(),
  idMedico: SortOrderSchema.optional(),
  costo: SortOrderSchema.optional()
}).strict();
export const ConsultaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaAvgOrderByAggregateInput>;
export const ConsultaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
