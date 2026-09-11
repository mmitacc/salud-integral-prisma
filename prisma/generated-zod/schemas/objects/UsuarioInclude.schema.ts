import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadArgsObjectSchema as EspecialidadArgsObjectSchema } from './EspecialidadArgs.schema';
import { ConsultaFindManySchema as ConsultaFindManySchema } from '../findManyConsulta.schema';
import { UsuarioCountOutputTypeArgsObjectSchema as UsuarioCountOutputTypeArgsObjectSchema } from './UsuarioCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  especialidad: z.union([z.boolean(), z.lazy(() => EspecialidadArgsObjectSchema)]).optional(),
  consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UsuarioIncludeObjectSchema: z.ZodType<Prisma.UsuarioInclude> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioInclude>;
export const UsuarioIncludeObjectZodSchema = makeSchema();
