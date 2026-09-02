import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoFindManySchema as MedicoFindManySchema } from '../findManyMedico.schema';
import { EspecialidadCountOutputTypeArgsObjectSchema as EspecialidadCountOutputTypeArgsObjectSchema } from './EspecialidadCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tipo: z.boolean().optional(),
  registerdate: z.boolean().optional(),
  medicos: z.union([z.boolean(), z.lazy(() => MedicoFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EspecialidadCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EspecialidadSelectObjectSchema: z.ZodType<Prisma.EspecialidadSelect> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadSelect>;
export const EspecialidadSelectObjectZodSchema = makeSchema();
