import * as z from 'zod';
export const EspecialidadCreateResultSchema = z.object({
  id: z.number().int(),
  tipo: z.string(),
  registerdate: z.date(),
  medicos: z.array(z.unknown()).optional()
});