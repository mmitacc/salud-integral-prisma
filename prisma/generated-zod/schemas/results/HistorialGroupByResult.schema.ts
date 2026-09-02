import * as z from 'zod';
export const HistorialGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  id_paciente: z.number().int().optional(),
  registerdate: z.date().optional(),
  motivo: z.string().optional(),
  antecedentes: z.string().nullable().optional(),
  triaje: z.string().optional(),
  diagnostico: z.string().nullable().optional(),
  tratamiento: z.string().nullable().optional(),
  receta: z.string().nullable().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    id_paciente: z.number().optional(),
    registerdate: z.number().optional(),
    motivo: z.number().optional(),
    antecedentes: z.number().optional(),
    triaje: z.number().optional(),
    diagnostico: z.number().optional(),
    tratamiento: z.number().optional(),
    receta: z.number().optional(),
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
    registerdate: z.date().nullable().optional(),
    motivo: z.string().nullable().optional(),
    antecedentes: z.string().nullable().optional(),
    triaje: z.string().nullable().optional(),
    diagnostico: z.string().nullable().optional(),
    tratamiento: z.string().nullable().optional(),
    receta: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    id_paciente: z.number().int().nullable().optional(),
    registerdate: z.date().nullable().optional(),
    motivo: z.string().nullable().optional(),
    antecedentes: z.string().nullable().optional(),
    triaje: z.string().nullable().optional(),
    diagnostico: z.string().nullable().optional(),
    tratamiento: z.string().nullable().optional(),
    receta: z.string().nullable().optional()
  }).nullable().optional()
}));