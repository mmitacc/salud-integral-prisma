import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_paciente: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  motivo: z.literal(true).optional(),
  antecedentes: z.literal(true).optional(),
  triaje: z.literal(true).optional(),
  diagnostico: z.literal(true).optional(),
  tratamiento: z.literal(true).optional(),
  receta: z.literal(true).optional()
}).strict();
export const HistorialMinAggregateInputObjectSchema: z.ZodType<Prisma.HistorialMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HistorialMinAggregateInputType>;
export const HistorialMinAggregateInputObjectZodSchema = makeSchema();
