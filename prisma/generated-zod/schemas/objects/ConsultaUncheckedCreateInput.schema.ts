import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_cita: z.number().int(),
  id_medico: z.number().int(),
  fecha: z.coerce.date(),
  horario: z.coerce.date()
}).strict();
export const ConsultaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedCreateInput>;
export const ConsultaUncheckedCreateInputObjectZodSchema = makeSchema();
