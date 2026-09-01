import * as z from 'zod';
export const MedicoCreateResultSchema = z.object({
  id: z.number().int(),
  idEspecialidad: z.number().int(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean(),
  fechaNac: z.date(),
  creado: z.date(),
  especialidad: z.unknown().optional(),
  consultas: z.array(z.unknown()).optional()
});