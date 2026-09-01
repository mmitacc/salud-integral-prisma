import * as z from 'zod';
import { ConsultaSelectObjectSchema as ConsultaSelectObjectSchema } from './ConsultaSelect.schema';
import { ConsultaIncludeObjectSchema as ConsultaIncludeObjectSchema } from './ConsultaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ConsultaSelectObjectSchema).optional(),
  include: z.lazy(() => ConsultaIncludeObjectSchema).optional()
}).strict();
export const ConsultaArgsObjectSchema = makeSchema();
export const ConsultaArgsObjectZodSchema = makeSchema();
