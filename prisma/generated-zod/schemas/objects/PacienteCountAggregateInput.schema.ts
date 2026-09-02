import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  nombres: z.literal(true).optional(),
  apellidos: z.literal(true).optional(),
  telefono: z.literal(true).optional(),
  email: z.literal(true).optional(),
  masculino: z.literal(true).optional(),
  fechanacimiento: z.literal(true).optional(),
  tiposangre: z.literal(true).optional(),
  alergias: z.literal(true).optional(),
  registerdate: z.literal(true).optional(),
  deleted: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PacienteCountAggregateInputObjectSchema: z.ZodType<Prisma.PacienteCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCountAggregateInputType>;
export const PacienteCountAggregateInputObjectZodSchema = makeSchema();
