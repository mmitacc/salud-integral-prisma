import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  idEspecialidad: SortOrderSchema.optional(),
  nombres: SortOrderSchema.optional(),
  apellidos: SortOrderSchema.optional(),
  telefono: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  masculino: SortOrderSchema.optional(),
  fechaNac: SortOrderSchema.optional(),
  creado: SortOrderSchema.optional()
}).strict();
export const MedicoMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MedicoMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoMaxOrderByAggregateInput>;
export const MedicoMaxOrderByAggregateInputObjectZodSchema = makeSchema();
