import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const EspecialidadAvgAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadAvgAggregateInputType>;
export const EspecialidadAvgAggregateInputObjectZodSchema = makeSchema();
