import * as z from 'zod';
import { CitaCountOutputTypeSelectObjectSchema as CitaCountOutputTypeSelectObjectSchema } from './CitaCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CitaCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CitaCountOutputTypeArgsObjectSchema = makeSchema();
export const CitaCountOutputTypeArgsObjectZodSchema = makeSchema();
