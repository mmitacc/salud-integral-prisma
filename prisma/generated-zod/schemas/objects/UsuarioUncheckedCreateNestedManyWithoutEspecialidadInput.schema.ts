import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCreateWithoutEspecialidadInputObjectSchema as UsuarioCreateWithoutEspecialidadInputObjectSchema } from './UsuarioCreateWithoutEspecialidadInput.schema';
import { UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema as UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema } from './UsuarioUncheckedCreateWithoutEspecialidadInput.schema';
import { UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema as UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema } from './UsuarioCreateOrConnectWithoutEspecialidadInput.schema';
import { UsuarioCreateManyEspecialidadInputEnvelopeObjectSchema as UsuarioCreateManyEspecialidadInputEnvelopeObjectSchema } from './UsuarioCreateManyEspecialidadInputEnvelope.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioCreateWithoutEspecialidadInputObjectSchema).array(), z.lazy(() => UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UsuarioCreateManyEspecialidadInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UsuarioUncheckedCreateNestedManyWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateNestedManyWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateNestedManyWithoutEspecialidadInput>;
export const UsuarioUncheckedCreateNestedManyWithoutEspecialidadInputObjectZodSchema = makeSchema();
