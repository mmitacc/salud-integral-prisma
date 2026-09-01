import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.string().max(150),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date()
}).strict();
export const MedicoCreateManyEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoCreateManyEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateManyEspecialidadInput>;
export const MedicoCreateManyEspecialidadInputObjectZodSchema = makeSchema();
