import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_especialidad: z.number().int(),
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.string().max(150),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date()
}).strict();
export const MedicoCreateManyInputObjectSchema: z.ZodType<Prisma.MedicoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateManyInput>;
export const MedicoCreateManyInputObjectZodSchema = makeSchema();
