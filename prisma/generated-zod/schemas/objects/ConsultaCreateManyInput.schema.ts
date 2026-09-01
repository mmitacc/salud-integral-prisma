import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_cita: z.number().int(),
  id_medico: z.number().int(),
  fecha: z.coerce.date(),
  horario: z.coerce.date()
}).strict();
export const ConsultaCreateManyInputObjectSchema: z.ZodType<Prisma.ConsultaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateManyInput>;
export const ConsultaCreateManyInputObjectZodSchema = makeSchema();
