import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateWithoutMedicoInputObjectSchema as ConsultaCreateWithoutMedicoInputObjectSchema } from './ConsultaCreateWithoutMedicoInput.schema';
import { ConsultaUncheckedCreateWithoutMedicoInputObjectSchema as ConsultaUncheckedCreateWithoutMedicoInputObjectSchema } from './ConsultaUncheckedCreateWithoutMedicoInput.schema';
import { ConsultaCreateOrConnectWithoutMedicoInputObjectSchema as ConsultaCreateOrConnectWithoutMedicoInputObjectSchema } from './ConsultaCreateOrConnectWithoutMedicoInput.schema';
import { ConsultaUpsertWithWhereUniqueWithoutMedicoInputObjectSchema as ConsultaUpsertWithWhereUniqueWithoutMedicoInputObjectSchema } from './ConsultaUpsertWithWhereUniqueWithoutMedicoInput.schema';
import { ConsultaCreateManyMedicoInputEnvelopeObjectSchema as ConsultaCreateManyMedicoInputEnvelopeObjectSchema } from './ConsultaCreateManyMedicoInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithWhereUniqueWithoutMedicoInputObjectSchema as ConsultaUpdateWithWhereUniqueWithoutMedicoInputObjectSchema } from './ConsultaUpdateWithWhereUniqueWithoutMedicoInput.schema';
import { ConsultaUpdateManyWithWhereWithoutMedicoInputObjectSchema as ConsultaUpdateManyWithWhereWithoutMedicoInputObjectSchema } from './ConsultaUpdateManyWithWhereWithoutMedicoInput.schema';
import { ConsultaScalarWhereInputObjectSchema as ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConsultaCreateWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaCreateWithoutMedicoInputObjectSchema).array(), z.lazy(() => ConsultaUncheckedCreateWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutMedicoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsultaCreateOrConnectWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaCreateOrConnectWithoutMedicoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConsultaUpsertWithWhereUniqueWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUpsertWithWhereUniqueWithoutMedicoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConsultaCreateManyMedicoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConsultaUpdateWithWhereUniqueWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUpdateWithWhereUniqueWithoutMedicoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConsultaUpdateManyWithWhereWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUpdateManyWithWhereWithoutMedicoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConsultaScalarWhereInputObjectSchema), z.lazy(() => ConsultaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ConsultaUncheckedUpdateManyWithoutMedicoNestedInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedUpdateManyWithoutMedicoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedUpdateManyWithoutMedicoNestedInput>;
export const ConsultaUncheckedUpdateManyWithoutMedicoNestedInputObjectZodSchema = makeSchema();
