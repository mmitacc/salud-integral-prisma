import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCountOutputTypeCountConsultasArgsObjectSchema as MedicoCountOutputTypeCountConsultasArgsObjectSchema } from './MedicoCountOutputTypeCountConsultasArgs.schema'

const makeSchema = () => z.object({
  consultas: z.union([z.boolean(), z.lazy(() => MedicoCountOutputTypeCountConsultasArgsObjectSchema)]).optional()
}).strict();
export const MedicoCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MedicoCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCountOutputTypeSelect>;
export const MedicoCountOutputTypeSelectObjectZodSchema = makeSchema();
