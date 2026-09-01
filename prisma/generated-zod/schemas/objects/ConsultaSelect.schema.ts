import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaArgsObjectSchema as CitaArgsObjectSchema } from './CitaArgs.schema';
import { MedicoArgsObjectSchema as MedicoArgsObjectSchema } from './MedicoArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  id_cita: z.boolean().optional(),
  id_medico: z.boolean().optional(),
  fecha: z.boolean().optional(),
  horario: z.boolean().optional(),
  cita: z.union([z.boolean(), z.lazy(() => CitaArgsObjectSchema)]).optional(),
  medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
}).strict();
export const ConsultaSelectObjectSchema: z.ZodType<Prisma.ConsultaSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaSelect>;
export const ConsultaSelectObjectZodSchema = makeSchema();
