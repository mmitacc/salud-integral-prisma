import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_paciente: z.literal(true).optional(),
  pagoinicial: z.literal(true).optional()
}).strict();
export const CitaSumAggregateInputObjectSchema: z.ZodType<Prisma.CitaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CitaSumAggregateInputType>;
export const CitaSumAggregateInputObjectZodSchema = makeSchema();
