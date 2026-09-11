import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteArgsObjectSchema as PacienteArgsObjectSchema } from './PacienteArgs.schema';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './UsuarioArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  id_paciente: z.boolean().optional(),
  id_usuario: z.boolean().optional(),
  estado: z.boolean().optional(),
  citadate: z.boolean().optional(),
  costo: z.boolean().optional(),
  registerdate: z.boolean().optional(),
  deleted: z.boolean().optional(),
  paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
  usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional()
}).strict();
export const ConsultaSelectObjectSchema: z.ZodType<Prisma.ConsultaSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaSelect>;
export const ConsultaSelectObjectZodSchema = makeSchema();
