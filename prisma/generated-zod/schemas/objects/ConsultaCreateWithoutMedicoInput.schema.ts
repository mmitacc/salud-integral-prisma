import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaCreateNestedOneWithoutConsultasInputObjectSchema as CitaCreateNestedOneWithoutConsultasInputObjectSchema } from './CitaCreateNestedOneWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date(),
  horario: z.coerce.date(),
  cita: z.lazy(() => CitaCreateNestedOneWithoutConsultasInputObjectSchema)
}).strict();
export const ConsultaCreateWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaCreateWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateWithoutMedicoInput>;
export const ConsultaCreateWithoutMedicoInputObjectZodSchema = makeSchema();
