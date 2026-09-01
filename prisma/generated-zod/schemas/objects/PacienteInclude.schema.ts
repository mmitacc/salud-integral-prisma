import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialFindManySchema as HistorialFindManySchema } from '../findManyHistorial.schema';
import { CitaFindManySchema as CitaFindManySchema } from '../findManyCita.schema';
import { PacienteCountOutputTypeArgsObjectSchema as PacienteCountOutputTypeArgsObjectSchema } from './PacienteCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  historiales: z.union([z.boolean(), z.lazy(() => HistorialFindManySchema)]).optional(),
  citas: z.union([z.boolean(), z.lazy(() => CitaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PacienteIncludeObjectSchema: z.ZodType<Prisma.PacienteInclude> = makeSchema() as unknown as z.ZodType<Prisma.PacienteInclude>;
export const PacienteIncludeObjectZodSchema = makeSchema();
