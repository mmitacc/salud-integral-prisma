import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_paciente: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  estado: z.literal(true).optional()
}).strict();
export const CitaMaxAggregateInputObjectSchema: z.ZodType<Prisma.CitaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CitaMaxAggregateInputType>;
export const CitaMaxAggregateInputObjectZodSchema = makeSchema();
