import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_paciente: z.number().int(),
  motivo: z.string(),
  antecedentes: z.string().optional().nullable(),
  triaje: z.string(),
  diagnostico: z.string().optional().nullable(),
  tratamiento: z.string().optional().nullable(),
  receta: z.string().optional().nullable(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional()
}).strict();
export const HistorialUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HistorialUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialUncheckedCreateInput>;
export const HistorialUncheckedCreateInputObjectZodSchema = makeSchema();
