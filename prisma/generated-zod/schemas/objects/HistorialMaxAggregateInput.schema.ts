import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  idPaciente: z.literal(true).optional(),
  fecha: z.literal(true).optional(),
  motivo: z.literal(true).optional(),
  antecedentes: z.literal(true).optional(),
  triaje: z.literal(true).optional(),
  diagnostico: z.literal(true).optional(),
  tratamiento: z.literal(true).optional(),
  receta: z.literal(true).optional()
}).strict();
export const HistorialMaxAggregateInputObjectSchema: z.ZodType<Prisma.HistorialMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HistorialMaxAggregateInputType>;
export const HistorialMaxAggregateInputObjectZodSchema = makeSchema();
