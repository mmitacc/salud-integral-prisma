import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  idEspecialidad: z.literal(true).optional()
}).strict();
export const MedicoSumAggregateInputObjectSchema: z.ZodType<Prisma.MedicoSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MedicoSumAggregateInputType>;
export const MedicoSumAggregateInputObjectZodSchema = makeSchema();
