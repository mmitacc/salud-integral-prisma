import * as z from 'zod';
export const UsuarioCreateResultSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  role: z.unknown(),
  username: z.string(),
  registerdate: z.date(),
  deleted: z.boolean(),
  medico: z.unknown().optional()
});