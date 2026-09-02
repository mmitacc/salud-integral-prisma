import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCreateNestedOneWithoutHistorialesInputObjectSchema as PacienteCreateNestedOneWithoutHistorialesInputObjectSchema } from './PacienteCreateNestedOneWithoutHistorialesInput.schema'

const makeSchema = () => z.object({
  motivo: z.string(),
  antecedentes: z.string().optional().nullable(),
  triaje: z.string(),
  diagnostico: z.string().optional().nullable(),
  tratamiento: z.string().optional().nullable(),
  receta: z.string().optional().nullable(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  paciente: z.lazy(() => PacienteCreateNestedOneWithoutHistorialesInputObjectSchema)
}).strict();
export const HistorialCreateInputObjectSchema: z.ZodType<Prisma.HistorialCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialCreateInput>;
export const HistorialCreateInputObjectZodSchema = makeSchema();
