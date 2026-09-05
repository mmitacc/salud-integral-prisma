import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoArgsObjectSchema as MedicoArgsObjectSchema } from './MedicoArgs.schema'

const makeSchema = () => z.object({
  medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
}).strict();
export const UsuarioIncludeObjectSchema: z.ZodType<Prisma.UsuarioInclude> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioInclude>;
export const UsuarioIncludeObjectZodSchema = makeSchema();
