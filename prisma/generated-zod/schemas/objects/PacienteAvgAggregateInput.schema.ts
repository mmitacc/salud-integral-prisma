import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const PacienteAvgAggregateInputObjectSchema: z.ZodType<Prisma.PacienteAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PacienteAvgAggregateInputType>;
export const PacienteAvgAggregateInputObjectZodSchema = makeSchema();
