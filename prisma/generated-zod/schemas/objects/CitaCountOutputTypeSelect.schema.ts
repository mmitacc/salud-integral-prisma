import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaCountOutputTypeCountConsultasArgsObjectSchema as CitaCountOutputTypeCountConsultasArgsObjectSchema } from './CitaCountOutputTypeCountConsultasArgs.schema'

const makeSchema = () => z.object({
  consultas: z.union([z.boolean(), z.lazy(() => CitaCountOutputTypeCountConsultasArgsObjectSchema)]).optional()
}).strict();
export const CitaCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CitaCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CitaCountOutputTypeSelect>;
export const CitaCountOutputTypeSelectObjectZodSchema = makeSchema();
