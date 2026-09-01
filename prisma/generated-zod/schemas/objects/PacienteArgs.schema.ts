import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './PacienteSelect.schema';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './PacienteInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PacienteSelectObjectSchema).optional(),
  include: z.lazy(() => PacienteIncludeObjectSchema).optional()
}).strict();
export const PacienteArgsObjectSchema = makeSchema();
export const PacienteArgsObjectZodSchema = makeSchema();
