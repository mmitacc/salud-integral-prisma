import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_cita: z.number().int(),
  fecha: z.coerce.date(),
  horario: z.coerce.date()
}).strict();
export const ConsultaUncheckedCreateWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedCreateWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedCreateWithoutMedicoInput>;
export const ConsultaUncheckedCreateWithoutMedicoInputObjectZodSchema = makeSchema();
