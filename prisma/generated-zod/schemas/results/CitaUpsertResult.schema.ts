import * as z from 'zod';
export const CitaUpsertResultSchema = z.object({
  id: z.number().int(),
  idPaciente: z.number().int(),
  fecha: z.date(),
  estado: z.unknown(),
  pagoInicial: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]),
  paciente: z.unknown().optional(),
  consultas: z.array(z.unknown()).optional()
});