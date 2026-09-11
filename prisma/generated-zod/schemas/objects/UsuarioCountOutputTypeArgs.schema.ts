import * as z from 'zod';
import { UsuarioCountOutputTypeSelectObjectSchema as UsuarioCountOutputTypeSelectObjectSchema } from './UsuarioCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UsuarioCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const UsuarioCountOutputTypeArgsObjectSchema = makeSchema();
export const UsuarioCountOutputTypeArgsObjectZodSchema = makeSchema();
