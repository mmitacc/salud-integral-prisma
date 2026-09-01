import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialCreateNestedManyWithoutPacienteInputObjectSchema as HistorialCreateNestedManyWithoutPacienteInputObjectSchema } from './HistorialCreateNestedManyWithoutPacienteInput.schema';
import { CitaCreateNestedManyWithoutPacienteInputObjectSchema as CitaCreateNestedManyWithoutPacienteInputObjectSchema } from './CitaCreateNestedManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.string().max(150),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date(),
  tipoSangre: z.string().max(5).optional(),
  alergias: z.string().optional(),
  creado: z.coerce.date().optional(),
  historiales: z.lazy(() => HistorialCreateNestedManyWithoutPacienteInputObjectSchema).optional(),
  citas: z.lazy(() => CitaCreateNestedManyWithoutPacienteInputObjectSchema).optional()
}).strict();
export const PacienteCreateInputObjectSchema: z.ZodType<Prisma.PacienteCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateInput>;
export const PacienteCreateInputObjectZodSchema = makeSchema();
