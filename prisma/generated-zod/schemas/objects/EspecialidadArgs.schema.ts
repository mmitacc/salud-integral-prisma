import * as z from 'zod';
import { EspecialidadSelectObjectSchema as EspecialidadSelectObjectSchema } from './EspecialidadSelect.schema';
import { EspecialidadIncludeObjectSchema as EspecialidadIncludeObjectSchema } from './EspecialidadInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EspecialidadSelectObjectSchema).optional(),
  include: z.lazy(() => EspecialidadIncludeObjectSchema).optional()
}).strict();
export const EspecialidadArgsObjectSchema = makeSchema();
export const EspecialidadArgsObjectZodSchema = makeSchema();
