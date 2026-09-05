import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_usuario: z.number().int(),
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.email({ message: "El formato del correo electrónico no es válido" }).max(150),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional()
}).strict();
export const MedicoCreateManyEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoCreateManyEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateManyEspecialidadInput>;
export const MedicoCreateManyEspecialidadInputObjectZodSchema = makeSchema();
