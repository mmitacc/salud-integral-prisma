import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCreateWithoutEspecialidadInputObjectSchema as UsuarioCreateWithoutEspecialidadInputObjectSchema } from './UsuarioCreateWithoutEspecialidadInput.schema';
import { UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema as UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema } from './UsuarioUncheckedCreateWithoutEspecialidadInput.schema';
import { UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema as UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema } from './UsuarioCreateOrConnectWithoutEspecialidadInput.schema';
import { UsuarioUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema as UsuarioUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema } from './UsuarioUpsertWithWhereUniqueWithoutEspecialidadInput.schema';
import { UsuarioCreateManyEspecialidadInputEnvelopeObjectSchema as UsuarioCreateManyEspecialidadInputEnvelopeObjectSchema } from './UsuarioCreateManyEspecialidadInputEnvelope.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema as UsuarioUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema } from './UsuarioUpdateWithWhereUniqueWithoutEspecialidadInput.schema';
import { UsuarioUpdateManyWithWhereWithoutEspecialidadInputObjectSchema as UsuarioUpdateManyWithWhereWithoutEspecialidadInputObjectSchema } from './UsuarioUpdateManyWithWhereWithoutEspecialidadInput.schema';
import { UsuarioScalarWhereInputObjectSchema as UsuarioScalarWhereInputObjectSchema } from './UsuarioScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioCreateWithoutEspecialidadInputObjectSchema).array(), z.lazy(() => UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioCreateOrConnectWithoutEspecialidadInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UsuarioUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UsuarioCreateManyEspecialidadInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UsuarioUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UsuarioUpdateManyWithWhereWithoutEspecialidadInputObjectSchema), z.lazy(() => UsuarioUpdateManyWithWhereWithoutEspecialidadInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UsuarioScalarWhereInputObjectSchema), z.lazy(() => UsuarioScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UsuarioUncheckedUpdateManyWithoutEspecialidadNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedUpdateManyWithoutEspecialidadNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedUpdateManyWithoutEspecialidadNestedInput>;
export const UsuarioUncheckedUpdateManyWithoutEspecialidadNestedInputObjectZodSchema = makeSchema();
