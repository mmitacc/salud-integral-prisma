import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { ConsultaUncheckedCreateNestedManyWithoutCitaInputObjectSchema as ConsultaUncheckedCreateNestedManyWithoutCitaInputObjectSchema } from './ConsultaUncheckedCreateNestedManyWithoutCitaInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional(),
  consultas: z.lazy(() => ConsultaUncheckedCreateNestedManyWithoutCitaInputObjectSchema).optional()
}).strict();
export const CitaUncheckedCreateWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaUncheckedCreateWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUncheckedCreateWithoutPacienteInput>;
export const CitaUncheckedCreateWithoutPacienteInputObjectZodSchema = makeSchema();
