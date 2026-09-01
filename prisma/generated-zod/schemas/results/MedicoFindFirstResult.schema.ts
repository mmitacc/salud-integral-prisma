import * as z from 'zod';
export const MedicoFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  id_especialidad: z.number().int(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean(),
  fecha_nac: z.date(),
  especialidad: z.unknown().optional(),
  consultas: z.array(z.unknown()).optional()
}));