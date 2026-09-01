import * as z from 'zod';
export const EspecialidadFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  tipo: z.string(),
  creado: z.date(),
  medicos: z.array(z.unknown()).optional()
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