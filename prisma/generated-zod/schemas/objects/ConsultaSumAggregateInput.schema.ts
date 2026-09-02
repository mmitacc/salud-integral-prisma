import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_cita: z.literal(true).optional(),
  id_medico: z.literal(true).optional(),
  costo: z.literal(true).optional()
}).strict();
export const ConsultaSumAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaSumAggregateInputType>;
export const ConsultaSumAggregateInputObjectZodSchema = makeSchema();
