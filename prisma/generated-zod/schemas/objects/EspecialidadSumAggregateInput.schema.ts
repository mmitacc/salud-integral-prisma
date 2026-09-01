import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const EspecialidadSumAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadSumAggregateInputType>;
export const EspecialidadSumAggregateInputObjectZodSchema = makeSchema();
