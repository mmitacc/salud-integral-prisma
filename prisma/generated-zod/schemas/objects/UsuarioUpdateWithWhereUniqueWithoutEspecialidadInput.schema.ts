import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutEspecialidadInputObjectSchema as UsuarioUpdateWithoutEspecialidadInputObjectSchema } from './UsuarioUpdateWithoutEspecialidadInput.schema';
import { UsuarioUncheckedUpdateWithoutEspecialidadInputObjectSchema as UsuarioUncheckedUpdateWithoutEspecialidadInputObjectSchema } from './UsuarioUncheckedUpdateWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UsuarioUpdateWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutEspecialidadInputObjectSchema)])
}).strict();
export const UsuarioUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateWithWhereUniqueWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateWithWhereUniqueWithoutEspecialidadInput>;
export const UsuarioUpdateWithWhereUniqueWithoutEspecialidadInputObjectZodSchema = makeSchema();
