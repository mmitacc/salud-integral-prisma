import * as z from 'zod';
export const ConsultaAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    id_paciente: z.number().optional(),
    id_medico: z.number().optional(),
    estado: z.number().optional(),
    citadate: z.number().optional(),
    costo: z.number().optional(),
    registerdate: z.number().optional(),
    deleted: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    id_paciente: z.number().nullable().optional(),
    id_medico: z.number().nullable().optional(),
    costo: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    id_paciente: z.number().nullable().optional(),
    id_medico: z.number().nullable().optional(),
    costo: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    id_paciente: z.number().int().nullable().optional(),
    id_medico: z.number().int().nullable().optional(),
    estado: z.unknown().nullable().optional(),
    citadate: z.date().nullable().optional(),
    costo: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional(),
    registerdate: z.date().nullable().optional(),
    deleted: z.boolean().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    id_paciente: z.number().int().nullable().optional(),
    id_medico: z.number().int().nullable().optional(),
    estado: z.unknown().nullable().optional(),
    citadate: z.date().nullable().optional(),
    costo: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional(),
    registerdate: z.date().nullable().optional(),
    deleted: z.boolean().nullable().optional()
  }).nullable().optional()});