import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioFindManySchema as UsuarioFindManySchema } from '../findManyUsuario.schema';
import { EspecialidadCountOutputTypeArgsObjectSchema as EspecialidadCountOutputTypeArgsObjectSchema } from './EspecialidadCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  usuarios: z.union([z.boolean(), z.lazy(() => UsuarioFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EspecialidadCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EspecialidadIncludeObjectSchema: z.ZodType<Prisma.EspecialidadInclude> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadInclude>;
export const EspecialidadIncludeObjectZodSchema = makeSchema();
