import * as z from 'zod';
import { EspecialidadCountOutputTypeSelectObjectSchema as EspecialidadCountOutputTypeSelectObjectSchema } from './EspecialidadCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EspecialidadCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const EspecialidadCountOutputTypeArgsObjectSchema = makeSchema();
export const EspecialidadCountOutputTypeArgsObjectZodSchema = makeSchema();
