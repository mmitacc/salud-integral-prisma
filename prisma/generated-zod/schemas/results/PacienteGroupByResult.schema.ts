import * as z from 'zod';
export const PacienteGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  nombres: z.string().optional(),
  apellidos: z.string().optional(),
  telefono: z.string().optional(),
  email: z.string().optional(),
  masculino: z.boolean().optional(),
  fecha_nac: z.date().optional(),
  tipoSangre: z.string().optional(),
  alergias: z.string().optional(),
  creado: z.date().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    nombres: z.number().optional(),
    apellidos: z.number().optional(),
    telefono: z.number().optional(),
    email: z.number().optional(),
    masculino: z.number().optional(),
    fecha_nac: z.number().optional(),
    tipoSangre: z.number().optional(),
    alergias: z.number().optional(),
    creado: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    nombres: z.string().nullable().optional(),
    apellidos: z.string().nullable().optional(),
    telefono: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    masculino: z.boolean().nullable().optional(),
    fecha_nac: z.date().nullable().optional(),
    tipoSangre: z.string().nullable().optional(),
    alergias: z.string().nullable().optional(),
    creado: z.date().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    nombres: z.string().nullable().optional(),
    apellidos: z.string().nullable().optional(),
    telefono: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    masculino: z.boolean().nullable().optional(),
    fecha_nac: z.date().nullable().optional(),
    tipoSangre: z.string().nullable().optional(),
    alergias: z.string().nullable().optional(),
    creado: z.date().nullable().optional()
  }).nullable().optional()
}));