import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialFindManySchema as HistorialFindManySchema } from '../findManyHistorial.schema';
import { ConsultaFindManySchema as ConsultaFindManySchema } from '../findManyConsulta.schema';
import { PacienteCountOutputTypeArgsObjectSchema as PacienteCountOutputTypeArgsObjectSchema } from './PacienteCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  historiales: z.union([z.boolean(), z.lazy(() => HistorialFindManySchema)]).optional(),
  consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PacienteIncludeObjectSchema: z.ZodType<Prisma.PacienteInclude> = makeSchema() as unknown as z.ZodType<Prisma.PacienteInclude>;
export const PacienteIncludeObjectZodSchema = makeSchema();
