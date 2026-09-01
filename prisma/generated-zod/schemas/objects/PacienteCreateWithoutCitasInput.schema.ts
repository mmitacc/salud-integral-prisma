import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialCreateNestedManyWithoutPacienteInputObjectSchema as HistorialCreateNestedManyWithoutPacienteInputObjectSchema } from './HistorialCreateNestedManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.string().max(150),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date(),
  tipo_sangre: z.string().max(5).optional(),
  alergias: z.string().optional(),
  historiales: z.lazy(() => HistorialCreateNestedManyWithoutPacienteInputObjectSchema).optional()
}).strict();
export const PacienteCreateWithoutCitasInputObjectSchema: z.ZodType<Prisma.PacienteCreateWithoutCitasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateWithoutCitasInput>;
export const PacienteCreateWithoutCitasInputObjectZodSchema = makeSchema();
