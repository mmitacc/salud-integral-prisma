import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadUpdateWithoutUsuariosInputObjectSchema as EspecialidadUpdateWithoutUsuariosInputObjectSchema } from './EspecialidadUpdateWithoutUsuariosInput.schema';
import { EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema as EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema } from './EspecialidadUncheckedUpdateWithoutUsuariosInput.schema';
import { EspecialidadCreateWithoutUsuariosInputObjectSchema as EspecialidadCreateWithoutUsuariosInputObjectSchema } from './EspecialidadCreateWithoutUsuariosInput.schema';
import { EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema as EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema } from './EspecialidadUncheckedCreateWithoutUsuariosInput.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EspecialidadUpdateWithoutUsuariosInputObjectSchema), z.lazy(() => EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema)]),
  create: z.union([z.lazy(() => EspecialidadCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema)]),
  where: z.lazy(() => EspecialidadWhereInputObjectSchema).optional()
}).strict();
export const EspecialidadUpsertWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EspecialidadUpsertWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpsertWithoutUsuariosInput>;
export const EspecialidadUpsertWithoutUsuariosInputObjectZodSchema = makeSchema();
