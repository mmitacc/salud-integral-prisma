import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteArgsObjectSchema as PacienteArgsObjectSchema } from './PacienteArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  idPaciente: z.boolean().optional(),
  fecha: z.boolean().optional(),
  motivo: z.boolean().optional(),
  antecedentes: z.boolean().optional(),
  triaje: z.boolean().optional(),
  diagnostico: z.boolean().optional(),
  tratamiento: z.boolean().optional(),
  receta: z.boolean().optional(),
  paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional()
}).strict();
export const HistorialSelectObjectSchema: z.ZodType<Prisma.HistorialSelect> = makeSchema() as unknown as z.ZodType<Prisma.HistorialSelect>;
export const HistorialSelectObjectZodSchema = makeSchema();
