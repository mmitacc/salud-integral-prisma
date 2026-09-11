import * as z from 'zod';
export const EspecialidadUpsertResultSchema = z.object({
  id: z.number().int(),
  tipo: z.string(),
  registerdate: z.date(),
  deleted: z.boolean(),
  usuarios: z.array(z.unknown()).optional()
});