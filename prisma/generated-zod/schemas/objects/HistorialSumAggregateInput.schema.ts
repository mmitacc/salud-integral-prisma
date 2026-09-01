import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_paciente: z.literal(true).optional()
}).strict();
export const HistorialSumAggregateInputObjectSchema: z.ZodType<Prisma.HistorialSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HistorialSumAggregateInputType>;
export const HistorialSumAggregateInputObjectZodSchema = makeSchema();
