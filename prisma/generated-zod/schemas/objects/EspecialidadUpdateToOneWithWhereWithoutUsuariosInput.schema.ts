import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema';
import { EspecialidadUpdateWithoutUsuariosInputObjectSchema as EspecialidadUpdateWithoutUsuariosInputObjectSchema } from './EspecialidadUpdateWithoutUsuariosInput.schema';
import { EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema as EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema } from './EspecialidadUncheckedUpdateWithoutUsuariosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EspecialidadWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EspecialidadUpdateWithoutUsuariosInputObjectSchema), z.lazy(() => EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema)])
}).strict();
export const EspecialidadUpdateToOneWithWhereWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EspecialidadUpdateToOneWithWhereWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpdateToOneWithWhereWithoutUsuariosInput>;
export const EspecialidadUpdateToOneWithWhereWithoutUsuariosInputObjectZodSchema = makeSchema();
