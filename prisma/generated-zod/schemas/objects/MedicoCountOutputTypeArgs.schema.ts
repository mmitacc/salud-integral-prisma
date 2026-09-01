import * as z from 'zod';
import { MedicoCountOutputTypeSelectObjectSchema as MedicoCountOutputTypeSelectObjectSchema } from './MedicoCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MedicoCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MedicoCountOutputTypeArgsObjectSchema = makeSchema();
export const MedicoCountOutputTypeArgsObjectZodSchema = makeSchema();
