import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaUncheckedCreateNestedManyWithoutPacienteInputObjectSchema as CitaUncheckedCreateNestedManyWithoutPacienteInputObjectSchema } from './CitaUncheckedCreateNestedManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date(),
  tipoSangre: z.string().optional(),
  alergias: z.string().optional(),
  creado: z.coerce.date().optional(),
  citas: z.lazy(() => CitaUncheckedCreateNestedManyWithoutPacienteInputObjectSchema).optional()
}).strict();
export const PacienteUncheckedCreateWithoutHistorialesInputObjectSchema: z.ZodType<Prisma.PacienteUncheckedCreateWithoutHistorialesInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUncheckedCreateWithoutHistorialesInput>;
export const PacienteUncheckedCreateWithoutHistorialesInputObjectZodSchema = makeSchema();
