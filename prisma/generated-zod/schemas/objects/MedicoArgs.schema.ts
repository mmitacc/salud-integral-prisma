import * as z from 'zod';
import { MedicoSelectObjectSchema as MedicoSelectObjectSchema } from './MedicoSelect.schema';
import { MedicoIncludeObjectSchema as MedicoIncludeObjectSchema } from './MedicoInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MedicoSelectObjectSchema).optional(),
  include: z.lazy(() => MedicoIncludeObjectSchema).optional()
}).strict();
export const MedicoArgsObjectSchema = makeSchema();
export const MedicoArgsObjectZodSchema = makeSchema();
