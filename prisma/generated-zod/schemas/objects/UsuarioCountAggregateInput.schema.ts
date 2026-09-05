import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  role: z.literal(true).optional(),
  username: z.literal(true).optional(),
  registerdate: z.literal(true).optional(),
  deleted: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UsuarioCountAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCountAggregateInputType>;
export const UsuarioCountAggregateInputObjectZodSchema = makeSchema();
