import * as z from 'zod';
export const ConsultaFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  id_cita: z.number().int(),
  id_medico: z.number().int(),
  fecha: z.date(),
  horario: z.date(),
  cita: z.unknown().optional(),
  medico: z.unknown().optional()
}));