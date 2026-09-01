import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoFindManySchema as MedicoFindManySchema } from '../findManyMedico.schema';
import { EspecialidadCountOutputTypeArgsObjectSchema as EspecialidadCountOutputTypeArgsObjectSchema } from './EspecialidadCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  medicos: z.union([z.boolean(), z.lazy(() => MedicoFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EspecialidadCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EspecialidadIncludeObjectSchema: z.ZodType<Prisma.EspecialidadInclude> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadInclude>;
export const EspecialidadIncludeObjectZodSchema = makeSchema();
