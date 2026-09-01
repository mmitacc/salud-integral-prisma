import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  idCita: z.literal(true).optional(),
  idMedico: z.literal(true).optional(),
  costo: z.literal(true).optional()
}).strict();
export const ConsultaAvgAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaAvgAggregateInputType>;
export const ConsultaAvgAggregateInputObjectZodSchema = makeSchema();
