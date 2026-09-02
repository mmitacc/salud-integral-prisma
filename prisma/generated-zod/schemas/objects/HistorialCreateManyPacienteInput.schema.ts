import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  registerdate: z.coerce.date().optional(),
  motivo: z.string(),
  antecedentes: z.string().optional().nullable(),
  triaje: z.string(),
  diagnostico: z.string().optional().nullable(),
  tratamiento: z.string().optional().nullable(),
  receta: z.string().optional().nullable()
}).strict();
export const HistorialCreateManyPacienteInputObjectSchema: z.ZodType<Prisma.HistorialCreateManyPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialCreateManyPacienteInput>;
export const HistorialCreateManyPacienteInputObjectZodSchema = makeSchema();
