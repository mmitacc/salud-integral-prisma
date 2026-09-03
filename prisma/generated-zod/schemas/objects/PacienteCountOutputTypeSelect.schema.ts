import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCountOutputTypeCountHistorialesArgsObjectSchema as PacienteCountOutputTypeCountHistorialesArgsObjectSchema } from './PacienteCountOutputTypeCountHistorialesArgs.schema';
import { PacienteCountOutputTypeCountConsultasArgsObjectSchema as PacienteCountOutputTypeCountConsultasArgsObjectSchema } from './PacienteCountOutputTypeCountConsultasArgs.schema'

const makeSchema = () => z.object({
  historiales: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeCountHistorialesArgsObjectSchema)]).optional(),
  consultas: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeCountConsultasArgsObjectSchema)]).optional()
}).strict();
export const PacienteCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PacienteCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCountOutputTypeSelect>;
export const PacienteCountOutputTypeSelectObjectZodSchema = makeSchema();
