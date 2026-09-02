import * as z from 'zod';
export const HistorialFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  id_paciente: z.number().int(),
  registerdate: z.date(),
  motivo: z.string(),
  antecedentes: z.string().nullable().optional(),
  triaje: z.string(),
  diagnostico: z.string().nullable().optional(),
  tratamiento: z.string().nullable().optional(),
  receta: z.string().nullable().optional(),
  paciente: z.unknown().optional()
}));