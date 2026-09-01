import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HistorialOrderByRelationAggregateInputObjectSchema as HistorialOrderByRelationAggregateInputObjectSchema } from './HistorialOrderByRelationAggregateInput.schema';
import { CitaOrderByRelationAggregateInputObjectSchema as CitaOrderByRelationAggregateInputObjectSchema } from './CitaOrderByRelationAggregateInput.schema'

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
  creado: SortOrderSchema.optional(),
  historiales: z.lazy(() => HistorialOrderByRelationAggregateInputObjectSchema).optional(),
  citas: z.lazy(() => CitaOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PacienteOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PacienteOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteOrderByWithRelationInput>;
export const PacienteOrderByWithRelationInputObjectZodSchema = makeSchema();
