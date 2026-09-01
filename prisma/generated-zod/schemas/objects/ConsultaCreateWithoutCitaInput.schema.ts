import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateNestedOneWithoutConsultasInputObjectSchema as MedicoCreateNestedOneWithoutConsultasInputObjectSchema } from './MedicoCreateNestedOneWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date(),
  horario: z.coerce.date(),
  medico: z.lazy(() => MedicoCreateNestedOneWithoutConsultasInputObjectSchema)
}).strict();
export const ConsultaCreateWithoutCitaInputObjectSchema: z.ZodType<Prisma.ConsultaCreateWithoutCitaInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateWithoutCitaInput>;
export const ConsultaCreateWithoutCitaInputObjectZodSchema = makeSchema();
