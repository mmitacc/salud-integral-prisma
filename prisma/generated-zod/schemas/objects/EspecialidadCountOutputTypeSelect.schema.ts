import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadCountOutputTypeCountMedicosArgsObjectSchema as EspecialidadCountOutputTypeCountMedicosArgsObjectSchema } from './EspecialidadCountOutputTypeCountMedicosArgs.schema'

const makeSchema = () => z.object({
  medicos: z.union([z.boolean(), z.lazy(() => EspecialidadCountOutputTypeCountMedicosArgsObjectSchema)]).optional()
}).strict();
export const EspecialidadCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EspecialidadCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCountOutputTypeSelect>;
export const EspecialidadCountOutputTypeSelectObjectZodSchema = makeSchema();
