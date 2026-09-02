import * as z from 'zod';
export const MedicoGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  id_especialidad: z.number().int().optional(),
  nombres: z.string().optional(),
  apellidos: z.string().optional(),
  telefono: z.string().optional(),
  email: z.string().optional(),
  masculino: z.boolean().optional(),
  fechanacimiento: z.date().optional(),
  registerdate: z.date().optional(),
  deleted: z.boolean().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    id_especialidad: z.number().optional(),
    nombres: z.number().optional(),
    apellidos: z.number().optional(),
    telefono: z.number().optional(),
    email: z.number().optional(),
    masculino: z.number().optional(),
    fechanacimiento: z.number().optional(),
    registerdate: z.number().optional(),
    deleted: z.number().optional(),
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
    fechanacimiento: z.date().nullable().optional(),
    registerdate: z.date().nullable().optional(),
    deleted: z.boolean().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    id_especialidad: z.number().int().nullable().optional(),
    nombres: z.string().nullable().optional(),
    apellidos: z.string().nullable().optional(),
    telefono: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    masculino: z.boolean().nullable().optional(),
    fechanacimiento: z.date().nullable().optional(),
    registerdate: z.date().nullable().optional(),
    deleted: z.boolean().nullable().optional()
  }).nullable().optional()
}));