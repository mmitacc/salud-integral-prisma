import * as z from 'zod';
export const EspecialidadDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  tipo: z.string(),
  registerdate: z.date(),
  medicos: z.array(z.unknown()).optional()
}));