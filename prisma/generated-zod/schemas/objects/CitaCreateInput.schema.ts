import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { PacienteCreateNestedOneWithoutCitasInputObjectSchema as PacienteCreateNestedOneWithoutCitasInputObjectSchema } from './PacienteCreateNestedOneWithoutCitasInput.schema';
import { ConsultaCreateNestedManyWithoutCitaInputObjectSchema as ConsultaCreateNestedManyWithoutCitaInputObjectSchema } from './ConsultaCreateNestedManyWithoutCitaInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional(),
  paciente: z.lazy(() => PacienteCreateNestedOneWithoutCitasInputObjectSchema),
  consultas: z.lazy(() => ConsultaCreateNestedManyWithoutCitaInputObjectSchema).optional()
}).strict();
export const CitaCreateInputObjectSchema: z.ZodType<Prisma.CitaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateInput>;
export const CitaCreateInputObjectZodSchema = makeSchema();
