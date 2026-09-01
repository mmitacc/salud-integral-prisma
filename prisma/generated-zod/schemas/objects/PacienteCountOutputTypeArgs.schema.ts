import * as z from 'zod';
import { PacienteCountOutputTypeSelectObjectSchema as PacienteCountOutputTypeSelectObjectSchema } from './PacienteCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PacienteCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PacienteCountOutputTypeArgsObjectSchema = makeSchema();
export const PacienteCountOutputTypeArgsObjectZodSchema = makeSchema();
