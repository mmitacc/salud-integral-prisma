import * as z from 'zod';
export const CitaFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  id_paciente: z.number().int(),
  fecha: z.date(),
  estado: z.unknown(),
  paciente: z.unknown().optional(),
  consultas: z.array(z.unknown()).optional()
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