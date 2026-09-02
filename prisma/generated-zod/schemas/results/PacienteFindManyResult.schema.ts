import * as z from 'zod';
export const PacienteFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean(),
  fechanacimiento: z.date(),
  tiposangre: z.string(),
  alergias: z.string(),
  registerdate: z.date(),
  deleted: z.boolean(),
  historiales: z.array(z.unknown()).optional(),
  citas: z.array(z.unknown()).optional()
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