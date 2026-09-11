import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateWithoutUsuarioInputObjectSchema as ConsultaCreateWithoutUsuarioInputObjectSchema } from './ConsultaCreateWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema as ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateWithoutUsuarioInput.schema';
import { ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema as ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema } from './ConsultaCreateOrConnectWithoutUsuarioInput.schema';
import { ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema as ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema } from './ConsultaUpsertWithWhereUniqueWithoutUsuarioInput.schema';
import { ConsultaCreateManyUsuarioInputEnvelopeObjectSchema as ConsultaCreateManyUsuarioInputEnvelopeObjectSchema } from './ConsultaCreateManyUsuarioInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema as ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema } from './ConsultaUpdateWithWhereUniqueWithoutUsuarioInput.schema';
import { ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema as ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema } from './ConsultaUpdateManyWithWhereWithoutUsuarioInput.schema';
import { ConsultaScalarWhereInputObjectSchema as ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema).array(), z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConsultaCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConsultaScalarWhereInputObjectSchema), z.lazy(() => ConsultaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ConsultaUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedUpdateManyWithoutUsuarioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedUpdateManyWithoutUsuarioNestedInput>;
export const ConsultaUncheckedUpdateManyWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
