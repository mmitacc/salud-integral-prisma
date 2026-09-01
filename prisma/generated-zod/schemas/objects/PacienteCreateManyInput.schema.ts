import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.string().max(150),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date(),
  tipo_sangre: z.string().max(5).optional(),
  alergias: z.string().optional()
}).strict();
export const PacienteCreateManyInputObjectSchema: z.ZodType<Prisma.PacienteCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateManyInput>;
export const PacienteCreateManyInputObjectZodSchema = makeSchema();
