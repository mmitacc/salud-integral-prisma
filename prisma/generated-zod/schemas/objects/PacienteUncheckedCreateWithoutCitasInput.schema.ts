import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialUncheckedCreateNestedManyWithoutPacienteInputObjectSchema as HistorialUncheckedCreateNestedManyWithoutPacienteInputObjectSchema } from './HistorialUncheckedCreateNestedManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  tiposangre: z.string().optional(),
  alergias: z.string().optional(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  historiales: z.lazy(() => HistorialUncheckedCreateNestedManyWithoutPacienteInputObjectSchema).optional()
}).strict();
export const PacienteUncheckedCreateWithoutCitasInputObjectSchema: z.ZodType<Prisma.PacienteUncheckedCreateWithoutCitasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUncheckedCreateWithoutCitasInput>;
export const PacienteUncheckedCreateWithoutCitasInputObjectZodSchema = makeSchema();
