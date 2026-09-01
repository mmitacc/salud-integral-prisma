import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tipo: z.literal(true).optional(),
  creado: z.literal(true).optional()
}).strict();
export const EspecialidadMinAggregateInputObjectSchema: z.ZodType<Prisma.EspecialidadMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadMinAggregateInputType>;
export const EspecialidadMinAggregateInputObjectZodSchema = makeSchema();
