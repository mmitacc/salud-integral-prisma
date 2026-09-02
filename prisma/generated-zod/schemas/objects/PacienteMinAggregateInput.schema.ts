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
  registerdate: z.literal(true).optional()
}).strict();
export const PacienteMinAggregateInputObjectSchema: z.ZodType<Prisma.PacienteMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PacienteMinAggregateInputType>;
export const PacienteMinAggregateInputObjectZodSchema = makeSchema();
