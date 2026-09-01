import * as z from 'zod';
export const HistorialFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  id_paciente: z.number().int(),
  fecha: z.date(),
  motivo: z.string(),
  antecedentes: z.string().nullable().optional(),
  triaje: z.string(),
  diagnostico: z.string().nullable().optional(),
  tratamiento: z.string().nullable().optional(),
  receta: z.string().nullable().optional(),
  paciente: z.unknown().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});