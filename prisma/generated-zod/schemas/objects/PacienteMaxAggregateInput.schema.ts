import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  nombres: z.literal(true).optional(),
  apellidos: z.literal(true).optional(),
  telefono: z.literal(true).optional(),
  email: z.literal(true).optional(),
  masculino: z.literal(true).optional(),
  fecha_nac: z.literal(true).optional(),
  tipoSangre: z.literal(true).optional(),
  alergias: z.literal(true).optional(),
  creado: z.literal(true).optional()
}).strict();
export const PacienteMaxAggregateInputObjectSchema: z.ZodType<Prisma.PacienteMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PacienteMaxAggregateInputType>;
export const PacienteMaxAggregateInputObjectZodSchema = makeSchema();
