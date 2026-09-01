import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteArgsObjectSchema as PacienteArgsObjectSchema } from './PacienteArgs.schema';
import { ConsultaFindManySchema as ConsultaFindManySchema } from '../findManyConsulta.schema';
import { CitaCountOutputTypeArgsObjectSchema as CitaCountOutputTypeArgsObjectSchema } from './CitaCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  id_paciente: z.boolean().optional(),
  fecha: z.boolean().optional(),
  estado: z.boolean().optional(),
  paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
  consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitaCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CitaSelectObjectSchema: z.ZodType<Prisma.CitaSelect> = makeSchema() as unknown as z.ZodType<Prisma.CitaSelect>;
export const CitaSelectObjectZodSchema = makeSchema();
