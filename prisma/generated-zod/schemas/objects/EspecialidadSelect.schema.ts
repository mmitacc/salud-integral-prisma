import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioFindManySchema as UsuarioFindManySchema } from '../findManyUsuario.schema';
import { EspecialidadCountOutputTypeArgsObjectSchema as EspecialidadCountOutputTypeArgsObjectSchema } from './EspecialidadCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tipo: z.boolean().optional(),
  registerdate: z.boolean().optional(),
  deleted: z.boolean().optional(),
  usuarios: z.union([z.boolean(), z.lazy(() => UsuarioFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EspecialidadCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EspecialidadSelectObjectSchema: z.ZodType<Prisma.EspecialidadSelect> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadSelect>;
export const EspecialidadSelectObjectZodSchema = makeSchema();
