import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const UsuarioAvgAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioAvgAggregateInputType>;
export const UsuarioAvgAggregateInputObjectZodSchema = makeSchema();
