import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteArgsObjectSchema as PacienteArgsObjectSchema } from './PacienteArgs.schema'

const makeSchema = () => z.object({
  paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional()
}).strict();
export const HistorialIncludeObjectSchema: z.ZodType<Prisma.HistorialInclude> = makeSchema() as unknown as z.ZodType<Prisma.HistorialInclude>;
export const HistorialIncludeObjectZodSchema = makeSchema();
