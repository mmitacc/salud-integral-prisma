import * as z from 'zod';
export const EspecialidadFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  tipo: z.string(),
  registerdate: z.date(),
  deleted: z.boolean(),
  medicos: z.array(z.unknown()).optional()
}));