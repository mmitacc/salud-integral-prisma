import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tipo: z.literal(true).optional(),
  registerdate: z.literal(true).optional(),
  deleted: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EspecialidadCountAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCountAggregateInputType>;
export const EspecialidadCountAggregateInputObjectZodSchema = makeSchema();
