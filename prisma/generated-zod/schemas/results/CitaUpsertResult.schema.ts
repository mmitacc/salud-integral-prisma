import * as z from 'zod';
export const CitaUpsertResultSchema = z.object({
  id: z.number().int(),
  id_paciente: z.number().int(),
  fecha: z.date(),
  estado: z.unknown(),
  paciente: z.unknown().optional(),
  consultas: z.array(z.unknown()).optional()
});