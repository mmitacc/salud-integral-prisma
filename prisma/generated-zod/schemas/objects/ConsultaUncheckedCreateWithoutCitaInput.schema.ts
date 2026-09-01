import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_medico: z.number().int(),
  fecha: z.coerce.date(),
  horario: z.coerce.date()
}).strict();
export const ConsultaUncheckedCreateWithoutCitaInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedCreateWithoutCitaInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedCreateWithoutCitaInput>;
export const ConsultaUncheckedCreateWithoutCitaInputObjectZodSchema = makeSchema();
