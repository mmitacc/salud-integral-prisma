import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_paciente: z.literal(true).optional()
}).strict();
export const CitaAvgAggregateInputObjectSchema: z.ZodType<Prisma.CitaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CitaAvgAggregateInputType>;
export const CitaAvgAggregateInputObjectZodSchema = makeSchema();
