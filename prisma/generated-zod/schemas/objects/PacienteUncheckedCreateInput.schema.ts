import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialUncheckedCreateNestedManyWithoutPacienteInputObjectSchema as HistorialUncheckedCreateNestedManyWithoutPacienteInputObjectSchema } from './HistorialUncheckedCreateNestedManyWithoutPacienteInput.schema';
import { CitaUncheckedCreateNestedManyWithoutPacienteInputObjectSchema as CitaUncheckedCreateNestedManyWithoutPacienteInputObjectSchema } from './CitaUncheckedCreateNestedManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.string().max(150),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date(),
  tipoSangre: z.string().max(5).optional(),
  alergias: z.string().optional(),
  creado: z.coerce.date().optional(),
  historiales: z.lazy(() => HistorialUncheckedCreateNestedManyWithoutPacienteInputObjectSchema).optional(),
  citas: z.lazy(() => CitaUncheckedCreateNestedManyWithoutPacienteInputObjectSchema).optional()
}).strict();
export const PacienteUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PacienteUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUncheckedCreateInput>;
export const PacienteUncheckedCreateInputObjectZodSchema = makeSchema();
