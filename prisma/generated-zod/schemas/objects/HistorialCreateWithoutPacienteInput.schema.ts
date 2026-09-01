import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  motivo: z.string(),
  antecedentes: z.string().optional().nullable(),
  triaje: z.string(),
  diagnostico: z.string().optional().nullable(),
  tratamiento: z.string().optional().nullable(),
  receta: z.string().optional().nullable()
}).strict();
export const HistorialCreateWithoutPacienteInputObjectSchema: z.ZodType<Prisma.HistorialCreateWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialCreateWithoutPacienteInput>;
export const HistorialCreateWithoutPacienteInputObjectZodSchema = makeSchema();
