import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteArgsObjectSchema as PacienteArgsObjectSchema } from './PacienteArgs.schema';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './UsuarioArgs.schema'

const makeSchema = () => z.object({
  paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
  usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional()
}).strict();
export const ConsultaIncludeObjectSchema: z.ZodType<Prisma.ConsultaInclude> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaInclude>;
export const ConsultaIncludeObjectZodSchema = makeSchema();
