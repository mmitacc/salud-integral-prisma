import * as z from 'zod';
export const MedicoAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    id_especialidad: z.number().optional(),
    nombres: z.number().optional(),
    apellidos: z.number().optional(),
    telefono: z.number().optional(),
    email: z.number().optional(),
    masculino: z.number().optional(),
    fecha_nac: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    id_especialidad: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    id_especialidad: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    id_especialidad: z.number().int().nullable().optional(),
    nombres: z.string().nullable().optional(),
    apellidos: z.string().nullable().optional(),
    telefono: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    masculino: z.boolean().nullable().optional(),
    fecha_nac: z.date().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    id_especialidad: z.number().int().nullable().optional(),
    nombres: z.string().nullable().optional(),
    apellidos: z.string().nullable().optional(),
    telefono: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    masculino: z.boolean().nullable().optional(),
    fecha_nac: z.date().nullable().optional()
  }).nullable().optional()});