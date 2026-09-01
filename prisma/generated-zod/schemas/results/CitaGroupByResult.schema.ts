import * as z from 'zod';
export const CitaGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  idPaciente: z.number().int().optional(),
  fecha: z.date().optional(),
  estado: z.unknown().optional(),
  pagoInicial: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    idPaciente: z.number().optional(),
    fecha: z.number().optional(),
    estado: z.number().optional(),
    pagoInicial: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    idPaciente: z.number().nullable().optional(),
    pagoInicial: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    idPaciente: z.number().nullable().optional(),
    pagoInicial: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    idPaciente: z.number().int().nullable().optional(),
    fecha: z.date().nullable().optional(),
    estado: z.unknown().nullable().optional(),
    pagoInicial: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    idPaciente: z.number().int().nullable().optional(),
    fecha: z.date().nullable().optional(),
    estado: z.unknown().nullable().optional(),
    pagoInicial: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional()
  }).nullable().optional()
}));