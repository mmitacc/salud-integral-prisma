import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  idCita: z.literal(true).optional(),
  idMedico: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  horario: z.literal(true).optional(),
  costo: z.literal(true).optional(),
  creado: z.literal(true).optional()
}).strict();
export const ConsultaMinAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaMinAggregateInputType>;
export const ConsultaMinAggregateInputObjectZodSchema = makeSchema();
