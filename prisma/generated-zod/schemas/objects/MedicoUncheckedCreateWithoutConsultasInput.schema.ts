import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  idEspecialidad: z.number().int(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean().optional(),
  fechaNac: z.coerce.date(),
  creado: z.coerce.date().optional()
}).strict();
export const MedicoUncheckedCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.MedicoUncheckedCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUncheckedCreateWithoutConsultasInput>;
export const MedicoUncheckedCreateWithoutConsultasInputObjectZodSchema = makeSchema();
