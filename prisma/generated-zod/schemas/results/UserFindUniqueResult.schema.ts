import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  role: z.unknown(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  activo: z.boolean(),
  registerdate: z.date(),
  deleted: z.boolean()
}));