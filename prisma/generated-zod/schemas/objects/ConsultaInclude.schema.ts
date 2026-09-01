import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaArgsObjectSchema as CitaArgsObjectSchema } from './CitaArgs.schema';
import { MedicoArgsObjectSchema as MedicoArgsObjectSchema } from './MedicoArgs.schema'

const makeSchema = () => z.object({
  cita: z.union([z.boolean(), z.lazy(() => CitaArgsObjectSchema)]).optional(),
  medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
}).strict();
export const ConsultaIncludeObjectSchema: z.ZodType<Prisma.ConsultaInclude> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaInclude>;
export const ConsultaIncludeObjectZodSchema = makeSchema();
