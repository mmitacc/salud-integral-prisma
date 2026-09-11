import * as z from 'zod';
export const UsuarioFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  id_especialidad: z.number().int().nullable().optional(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  masculino: z.boolean(),
  fechanacimiento: z.date(),
  email: z.string(),
  password: z.string(),
  role: z.unknown(),
  username: z.string(),
  registerdate: z.date(),
  deleted: z.boolean(),
  especialidad: z.unknown().optional(),
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