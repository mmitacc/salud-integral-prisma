import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PacienteOrderByWithRelationInputObjectSchema as PacienteOrderByWithRelationInputObjectSchema } from './PacienteOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  motivo: SortOrderSchema.optional(),
  antecedentes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  triaje: SortOrderSchema.optional(),
  diagnostico: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tratamiento: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  receta: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  paciente: z.lazy(() => PacienteOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const HistorialOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.HistorialOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialOrderByWithRelationInput>;
export const HistorialOrderByWithRelationInputObjectZodSchema = makeSchema();
