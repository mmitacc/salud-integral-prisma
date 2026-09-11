import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutEspecialidadInputObjectSchema as UsuarioCreateWithoutEspecialidadInputObjectSchema } from './UsuarioCreateWithoutEspecialidadInput.schema';
import { UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema as UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema } from './UsuarioUncheckedCreateWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema)])
}).strict();
export const UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutEspecialidadInput>;
export const UsuarioCreateOrConnectWithoutEspecialidadInputObjectZodSchema = makeSchema();
