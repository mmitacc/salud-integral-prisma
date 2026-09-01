import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaCreateNestedOneWithoutConsultasInputObjectSchema as CitaCreateNestedOneWithoutConsultasInputObjectSchema } from './CitaCreateNestedOneWithoutConsultasInput.schema';
import { MedicoCreateNestedOneWithoutConsultasInputObjectSchema as MedicoCreateNestedOneWithoutConsultasInputObjectSchema } from './MedicoCreateNestedOneWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  fecha: z.coerce.date(),
  horario: z.coerce.date(),
  cita: z.lazy(() => CitaCreateNestedOneWithoutConsultasInputObjectSchema),
  medico: z.lazy(() => MedicoCreateNestedOneWithoutConsultasInputObjectSchema)
}).strict();
export const ConsultaCreateInputObjectSchema: z.ZodType<Prisma.ConsultaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateInput>;
export const ConsultaCreateInputObjectZodSchema = makeSchema();
