import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCountOutputTypeCountHistorialesArgsObjectSchema as PacienteCountOutputTypeCountHistorialesArgsObjectSchema } from './PacienteCountOutputTypeCountHistorialesArgs.schema';
import { PacienteCountOutputTypeCountCitasArgsObjectSchema as PacienteCountOutputTypeCountCitasArgsObjectSchema } from './PacienteCountOutputTypeCountCitasArgs.schema'

const makeSchema = () => z.object({
  historiales: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeCountHistorialesArgsObjectSchema)]).optional(),
  citas: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeCountCitasArgsObjectSchema)]).optional()
}).strict();
export const PacienteCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PacienteCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCountOutputTypeSelect>;
export const PacienteCountOutputTypeSelectObjectZodSchema = makeSchema();
