import * as z from 'zod';
export const EspecialidadUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  tipo: z.string(),
  medicos: z.array(z.unknown()).optional()
}));