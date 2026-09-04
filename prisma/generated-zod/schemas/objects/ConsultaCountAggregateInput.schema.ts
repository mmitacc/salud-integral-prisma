import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_paciente: z.literal(true).optional(),
  id_medico: z.literal(true).optional(),
  estado: z.literal(true).optional(),
  citadate: z.literal(true).optional(),
  costo: z.literal(true).optional(),
  registerdate: z.literal(true).optional(),
  deleted: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ConsultaCountAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCountAggregateInputType>;
export const ConsultaCountAggregateInputObjectZodSchema = makeSchema();
