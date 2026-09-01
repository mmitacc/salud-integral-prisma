import * as z from 'zod';
export const EspecialidadFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  tipo: z.string(),
  creado: z.date(),
  medicos: z.array(z.unknown()).optional()
}));