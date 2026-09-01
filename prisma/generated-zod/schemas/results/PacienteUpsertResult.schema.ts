import * as z from 'zod';
export const PacienteUpsertResultSchema = z.object({
  id: z.number().int(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean(),
  fecha_nac: z.date(),
  tipoSangre: z.string(),
  alergias: z.string(),
  creado: z.date(),
  historiales: z.array(z.unknown()).optional(),
  citas: z.array(z.unknown()).optional()
});