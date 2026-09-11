import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_paciente: z.literal(true).optional(),
  id_usuario: z.literal(true).optional(),
  estado: z.literal(true).optional(),
  citadate: z.literal(true).optional(),
  costo: z.literal(true).optional(),
  registerdate: z.literal(true).optional(),
  deleted: z.literal(true).optional()
}).strict();
export const ConsultaMaxAggregateInputObjectSchema: z.ZodType<Prisma.ConsultaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaMaxAggregateInputType>;
export const ConsultaMaxAggregateInputObjectZodSchema = makeSchema();
