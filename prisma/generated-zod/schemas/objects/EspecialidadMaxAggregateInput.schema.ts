import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tipo: z.literal(true).optional(),
  registerdate: z.literal(true).optional()
}).strict();
export const EspecialidadMaxAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadMaxAggregateInputType>;
export const EspecialidadMaxAggregateInputObjectZodSchema = makeSchema();
