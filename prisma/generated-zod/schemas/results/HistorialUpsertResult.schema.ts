import * as z from 'zod';
export const HistorialUpsertResultSchema = z.object({
  id: z.number().int(),
  id_paciente: z.number().int(),
  motivo: z.string(),
  antecedentes: z.string().nullable().optional(),
  triaje: z.string(),
  diagnostico: z.string().nullable().optional(),
  tratamiento: z.string().nullable().optional(),
  receta: z.string().nullable().optional(),
  registerdate: z.date(),
  deleted: z.boolean(),
  paciente: z.unknown().optional()
});