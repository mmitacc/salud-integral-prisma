import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutEspecialidadInputObjectSchema as UsuarioUpdateWithoutEspecialidadInputObjectSchema } from './UsuarioUpdateWithoutEspecialidadInput.schema';
import { UsuarioUncheckedUpdateWithoutEspecialidadInputObjectSchema as UsuarioUncheckedUpdateWithoutEspecialidadInputObjectSchema } from './UsuarioUncheckedUpdateWithoutEspecialidadInput.schema';
import { UsuarioCreateWithoutEspecialidadInputObjectSchema as UsuarioCreateWithoutEspecialidadInputObjectSchema } from './UsuarioCreateWithoutEspecialidadInput.schema';
import { UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema as UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema } from './UsuarioUncheckedCreateWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UsuarioUpdateWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutEspecialidadInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema)])
}).strict();
export const UsuarioUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithWhereUniqueWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithWhereUniqueWithoutEspecialidadInput>;
export const UsuarioUpsertWithWhereUniqueWithoutEspecialidadInputObjectZodSchema = makeSchema();
