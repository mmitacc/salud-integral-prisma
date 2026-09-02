import * as z from 'zod';
export const CitaUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  id_paciente: z.number().int(),
  estado: z.unknown(),
  pagoinicial: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]),
  registerdate: z.date(),
  deleted: z.boolean(),
  paciente: z.unknown().optional(),
  consultas: z.array(z.unknown()).optional()
}));