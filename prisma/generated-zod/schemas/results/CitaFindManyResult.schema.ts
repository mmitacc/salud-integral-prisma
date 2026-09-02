import * as z from 'zod';
export const CitaFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  id_paciente: z.number().int(),
  estado: z.unknown(),
  pagoinicial: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]),
  registerdate: z.date(),
  deleted: z.boolean(),
  paciente: z.unknown().optional(),
  consultas: z.array(z.unknown()).optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});