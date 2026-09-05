import * as z from 'zod';
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from './UsuarioSelect.schema';
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from './UsuarioInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UsuarioSelectObjectSchema).optional(),
  include: z.lazy(() => UsuarioIncludeObjectSchema).optional()
}).strict();
export const UsuarioArgsObjectSchema = makeSchema();
export const UsuarioArgsObjectZodSchema = makeSchema();
