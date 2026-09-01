import * as z from 'zod';
import { CitaSelectObjectSchema as CitaSelectObjectSchema } from './CitaSelect.schema';
import { CitaIncludeObjectSchema as CitaIncludeObjectSchema } from './CitaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CitaSelectObjectSchema).optional(),
  include: z.lazy(() => CitaIncludeObjectSchema).optional()
}).strict();
export const CitaArgsObjectSchema = makeSchema();
export const CitaArgsObjectZodSchema = makeSchema();
