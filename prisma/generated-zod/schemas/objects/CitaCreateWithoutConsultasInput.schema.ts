import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { PacienteCreateNestedOneWithoutCitasInputObjectSchema as PacienteCreateNestedOneWithoutCitasInputObjectSchema } from './PacienteCreateNestedOneWithoutCitasInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional(),
  paciente: z.lazy(() => PacienteCreateNestedOneWithoutCitasInputObjectSchema)
}).strict();
export const CitaCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateWithoutConsultasInput>;
export const CitaCreateWithoutConsultasInputObjectZodSchema = makeSchema();
