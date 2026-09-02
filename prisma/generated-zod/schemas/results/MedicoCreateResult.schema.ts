import * as z from 'zod';
export const MedicoCreateResultSchema = z.object({
  id: z.number().int(),
  id_especialidad: z.number().int(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean(),
  fechanacimiento: z.date(),
  registerdate: z.date(),
  deleted: z.boolean(),
  especialidad: z.unknown().optional(),
  consultas: z.array(z.unknown()).optional()
});