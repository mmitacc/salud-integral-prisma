import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_cita: z.number().int(),
  fecha: z.coerce.date(),
  horario: z.coerce.date()
}).strict();
export const ConsultaCreateManyMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaCreateManyMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateManyMedicoInput>;
export const ConsultaCreateManyMedicoInputObjectZodSchema = makeSchema();
