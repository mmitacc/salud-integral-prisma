import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  role: z.literal(true).optional(),
  nombres: z.literal(true).optional(),
  apellidos: z.literal(true).optional(),
  activo: z.literal(true).optional(),
  registerdate: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserCountAggregateInputObjectSchema: z.ZodType<Prisma.UserCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserCountAggregateInputType>;
export const UserCountAggregateInputObjectZodSchema = makeSchema();
