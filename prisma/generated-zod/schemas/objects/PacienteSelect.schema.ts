import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialFindManySchema as HistorialFindManySchema } from '../findManyHistorial.schema';
import { CitaFindManySchema as CitaFindManySchema } from '../findManyCita.schema';
import { PacienteCountOutputTypeArgsObjectSchema as PacienteCountOutputTypeArgsObjectSchema } from './PacienteCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  nombres: z.boolean().optional(),
  apellidos: z.boolean().optional(),
  telefono: z.boolean().optional(),
  email: z.boolean().optional(),
  masculino: z.boolean().optional(),
  fecha_nac: z.boolean().optional(),
  tipo_sangre: z.boolean().optional(),
  alergias: z.boolean().optional(),
  historiales: z.union([z.boolean(), z.lazy(() => HistorialFindManySchema)]).optional(),
  citas: z.union([z.boolean(), z.lazy(() => CitaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PacienteSelectObjectSchema: z.ZodType<Prisma.PacienteSelect> = makeSchema() as unknown as z.ZodType<Prisma.PacienteSelect>;
export const PacienteSelectObjectZodSchema = makeSchema();
