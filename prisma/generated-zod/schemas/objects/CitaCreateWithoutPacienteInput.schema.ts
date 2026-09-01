import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { ConsultaCreateNestedManyWithoutCitaInputObjectSchema as ConsultaCreateNestedManyWithoutCitaInputObjectSchema } from './ConsultaCreateNestedManyWithoutCitaInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional(),
  consultas: z.lazy(() => ConsultaCreateNestedManyWithoutCitaInputObjectSchema).optional()
}).strict();
export const CitaCreateWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaCreateWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateWithoutPacienteInput>;
export const CitaCreateWithoutPacienteInputObjectZodSchema = makeSchema();
