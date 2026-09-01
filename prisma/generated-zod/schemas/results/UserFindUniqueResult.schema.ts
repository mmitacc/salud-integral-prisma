import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  role: z.unknown(),
  nombres: z.string(),
  apellidos: z.string(),
  activo: z.boolean()
}));