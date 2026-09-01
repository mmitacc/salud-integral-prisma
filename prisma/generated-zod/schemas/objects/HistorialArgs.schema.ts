import * as z from 'zod';
import { HistorialSelectObjectSchema as HistorialSelectObjectSchema } from './HistorialSelect.schema';
import { HistorialIncludeObjectSchema as HistorialIncludeObjectSchema } from './HistorialInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HistorialSelectObjectSchema).optional(),
  include: z.lazy(() => HistorialIncludeObjectSchema).optional()
}).strict();
export const HistorialArgsObjectSchema = makeSchema();
export const HistorialArgsObjectZodSchema = makeSchema();
