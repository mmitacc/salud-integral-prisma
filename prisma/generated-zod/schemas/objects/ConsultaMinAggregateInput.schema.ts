import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_cita: z.literal(true).optional(),
  id_medico: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  horario: z.literal(true).optional()
}).strict();
export const ConsultaMinAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaMinAggregateInputType>;
export const ConsultaMinAggregateInputObjectZodSchema = makeSchema();
