import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_especialidad: z.literal(true).optional()
}).strict();
export const UsuarioSumAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioSumAggregateInputType>;
export const UsuarioSumAggregateInputObjectZodSchema = makeSchema();
