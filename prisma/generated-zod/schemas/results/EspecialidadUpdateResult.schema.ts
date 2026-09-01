import * as z from 'zod';
export const EspecialidadUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  tipo: z.string(),
  creado: z.date(),
  medicos: z.array(z.unknown()).optional()
}));