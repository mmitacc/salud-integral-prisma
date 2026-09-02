import * as z from 'zod';
export const ConsultaUpsertResultSchema = z.object({
  id: z.number().int(),
  id_cita: z.number().int(),
  id_medico: z.number().int(),
  fecha: z.date(),
  horario: z.date(),
  costo: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]),
  registerdate: z.date(),
  deleted: z.boolean(),
  cita: z.unknown().optional(),
  medico: z.unknown().optional()
});