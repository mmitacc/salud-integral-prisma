import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_paciente: z.number().int(),
  fecha: z.coerce.date().optional(),
  motivo: z.string(),
  antecedentes: z.string().optional().nullable(),
  triaje: z.string(),
  diagnostico: z.string().optional().nullable(),
  tratamiento: z.string().optional().nullable(),
  receta: z.string().optional().nullable()
}).strict();
export const HistorialCreateManyInputObjectSchema: z.ZodType<Prisma.HistorialCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialCreateManyInput>;
export const HistorialCreateManyInputObjectZodSchema = makeSchema();
