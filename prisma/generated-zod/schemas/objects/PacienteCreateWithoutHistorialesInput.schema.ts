import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
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
  citas: z.lazy(() => CitaCreateNestedManyWithoutPacienteInputObjectSchema).optional()
}).strict();
export const PacienteCreateWithoutHistorialesInputObjectSchema: z.ZodType<Prisma.PacienteCreateWithoutHistorialesInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateWithoutHistorialesInput>;
export const PacienteCreateWithoutHistorialesInputObjectZodSchema = makeSchema();
