import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_especialidad: z.literal(true).optional(),
  nombres: z.literal(true).optional(),
  apellidos: z.literal(true).optional(),
  telefono: z.literal(true).optional(),
  email: z.literal(true).optional(),
  masculino: z.literal(true).optional(),
  fechanacimiento: z.literal(true).optional(),
  registerdate: z.literal(true).optional(),
  deleted: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MedicoCountAggregateInputObjectSchema: z.ZodType<Prisma.MedicoCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCountAggregateInputType>;
export const MedicoCountAggregateInputObjectZodSchema = makeSchema();
