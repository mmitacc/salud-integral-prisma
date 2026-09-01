import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const PacienteSumAggregateInputObjectSchema: z.ZodType<Prisma.PacienteSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PacienteSumAggregateInputType>;
export const PacienteSumAggregateInputObjectZodSchema = makeSchema();
