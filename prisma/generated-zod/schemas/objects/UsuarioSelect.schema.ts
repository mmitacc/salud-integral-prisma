import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoArgsObjectSchema as MedicoArgsObjectSchema } from './MedicoArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  username: z.boolean().optional(),
  registerdate: z.boolean().optional(),
  deleted: z.boolean().optional(),
  medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
}).strict();
export const UsuarioSelectObjectSchema: z.ZodType<Prisma.UsuarioSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioSelect>;
export const UsuarioSelectObjectZodSchema = makeSchema();
