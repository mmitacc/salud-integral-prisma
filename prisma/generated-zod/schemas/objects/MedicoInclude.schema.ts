import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadArgsObjectSchema as EspecialidadArgsObjectSchema } from './EspecialidadArgs.schema';
import { ConsultaFindManySchema as ConsultaFindManySchema } from '../findManyConsulta.schema';
import { MedicoCountOutputTypeArgsObjectSchema as MedicoCountOutputTypeArgsObjectSchema } from './MedicoCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  especialidad: z.union([z.boolean(), z.lazy(() => EspecialidadArgsObjectSchema)]).optional(),
  consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MedicoCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MedicoIncludeObjectSchema: z.ZodType<Prisma.MedicoInclude> = makeSchema() as unknown as z.ZodType<Prisma.MedicoInclude>;
export const MedicoIncludeObjectZodSchema = makeSchema();
