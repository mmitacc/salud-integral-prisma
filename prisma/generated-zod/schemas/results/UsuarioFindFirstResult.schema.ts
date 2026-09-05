import * as z from 'zod';
export const UsuarioFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  role: z.unknown(),
  username: z.string(),
  registerdate: z.date(),
  deleted: z.boolean(),
  medico: z.unknown().optional()
}));