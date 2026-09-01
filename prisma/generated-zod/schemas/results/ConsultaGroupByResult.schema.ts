import * as z from 'zod';
export const ConsultaGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  idCita: z.number().int().optional(),
  idMedico: z.number().int().optional(),
  fecha: z.date().optional(),
  horario: z.date().optional(),
  costo: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).optional(),
  creado: z.date().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    idCita: z.number().optional(),
    idMedico: z.number().optional(),
    fecha: z.number().optional(),
    horario: z.number().optional(),
    costo: z.number().optional(),
    creado: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    idCita: z.number().nullable().optional(),
    idMedico: z.number().nullable().optional(),
    costo: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    idCita: z.number().nullable().optional(),
    idMedico: z.number().nullable().optional(),
    costo: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    idCita: z.number().int().nullable().optional(),
    idMedico: z.number().int().nullable().optional(),
    fecha: z.date().nullable().optional(),
    horario: z.date().nullable().optional(),
    costo: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional(),
    creado: z.date().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    idCita: z.number().int().nullable().optional(),
    idMedico: z.number().int().nullable().optional(),
    fecha: z.date().nullable().optional(),
    horario: z.date().nullable().optional(),
    costo: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional(),
    creado: z.date().nullable().optional()
  }).nullable().optional()
}));