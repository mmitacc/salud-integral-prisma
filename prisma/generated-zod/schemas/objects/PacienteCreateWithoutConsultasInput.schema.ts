import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialCreateNestedManyWithoutPacienteInputObjectSchema as HistorialCreateNestedManyWithoutPacienteInputObjectSchema } from './HistorialCreateNestedManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.email({ message: "El formato del correo electrónico no es válido" }).max(150),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  tiposangre: z.string().max(5).optional(),
  alergias: z.string().optional(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  historiales: z.lazy(() => HistorialCreateNestedManyWithoutPacienteInputObjectSchema).optional()
}).strict();
export const PacienteCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.PacienteCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateWithoutConsultasInput>;
export const PacienteCreateWithoutConsultasInputObjectZodSchema = makeSchema();
