import * as z from 'zod';
export const PacienteDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean(),
  fechanacimiento: z.date(),
  tiposangre: z.string(),
  alergias: z.string(),
  registerdate: z.date(),
  deleted: z.boolean(),
  historiales: z.array(z.unknown()).optional(),
  consultas: z.array(z.unknown()).optional()
}));