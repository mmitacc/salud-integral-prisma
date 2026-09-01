import * as z from 'zod';
export const CitaGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  id_paciente: z.number().int().optional(),
  fecha: z.date().optional(),
  estado: z.unknown().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    id_paciente: z.number().optional(),
    fecha: z.number().optional(),
    estado: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    id_paciente: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    id_paciente: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    id_paciente: z.number().int().nullable().optional(),
    fecha: z.date().nullable().optional(),
    estado: z.unknown().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    id_paciente: z.number().int().nullable().optional(),
    fecha: z.date().nullable().optional(),
    estado: z.unknown().nullable().optional()
  }).nullable().optional()
}));