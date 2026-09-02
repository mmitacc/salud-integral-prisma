import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_paciente: z.literal(true).optional(),
  estado: z.literal(true).optional(),
  pagoinicial: z.literal(true).optional(),
  registerdate: z.literal(true).optional()
}).strict();
export const CitaMinAggregateInputObjectSchema: z.ZodType<Prisma.CitaMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CitaMinAggregateInputType>;
export const CitaMinAggregateInputObjectZodSchema = makeSchema();
