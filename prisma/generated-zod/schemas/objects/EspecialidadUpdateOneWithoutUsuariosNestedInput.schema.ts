import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadCreateWithoutUsuariosInputObjectSchema as EspecialidadCreateWithoutUsuariosInputObjectSchema } from './EspecialidadCreateWithoutUsuariosInput.schema';
import { EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema as EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema } from './EspecialidadUncheckedCreateWithoutUsuariosInput.schema';
import { EspecialidadCreateOrConnectWithoutUsuariosInputObjectSchema as EspecialidadCreateOrConnectWithoutUsuariosInputObjectSchema } from './EspecialidadCreateOrConnectWithoutUsuariosInput.schema';
import { EspecialidadUpsertWithoutUsuariosInputObjectSchema as EspecialidadUpsertWithoutUsuariosInputObjectSchema } from './EspecialidadUpsertWithoutUsuariosInput.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './EspecialidadWhereUniqueInput.schema';
import { EspecialidadUpdateToOneWithWhereWithoutUsuariosInputObjectSchema as EspecialidadUpdateToOneWithWhereWithoutUsuariosInputObjectSchema } from './EspecialidadUpdateToOneWithWhereWithoutUsuariosInput.schema';
import { EspecialidadUpdateWithoutUsuariosInputObjectSchema as EspecialidadUpdateWithoutUsuariosInputObjectSchema } from './EspecialidadUpdateWithoutUsuariosInput.schema';
import { EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema as EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema } from './EspecialidadUncheckedUpdateWithoutUsuariosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EspecialidadCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EspecialidadCreateOrConnectWithoutUsuariosInputObjectSchema).optional(),
  upsert: z.lazy(() => EspecialidadUpsertWithoutUsuariosInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => EspecialidadWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => EspecialidadWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => EspecialidadWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EspecialidadUpdateToOneWithWhereWithoutUsuariosInputObjectSchema), z.lazy(() => EspecialidadUpdateWithoutUsuariosInputObjectSchema), z.lazy(() => EspecialidadUncheckedUpdateWithoutUsuariosInputObjectSchema)]).optional()
}).strict();
export const EspecialidadUpdateOneWithoutUsuariosNestedInputObjectSchema: z.ZodType<Prisma.EspecialidadUpdateOneWithoutUsuariosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpdateOneWithoutUsuariosNestedInput>;
export const EspecialidadUpdateOneWithoutUsuariosNestedInputObjectZodSchema = makeSchema();
