import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateWithoutPacienteInputObjectSchema as ConsultaCreateWithoutPacienteInputObjectSchema } from './ConsultaCreateWithoutPacienteInput.schema';
import { ConsultaUncheckedCreateWithoutPacienteInputObjectSchema as ConsultaUncheckedCreateWithoutPacienteInputObjectSchema } from './ConsultaUncheckedCreateWithoutPacienteInput.schema';
import { ConsultaCreateOrConnectWithoutPacienteInputObjectSchema as ConsultaCreateOrConnectWithoutPacienteInputObjectSchema } from './ConsultaCreateOrConnectWithoutPacienteInput.schema';
import { ConsultaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema as ConsultaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema } from './ConsultaUpsertWithWhereUniqueWithoutPacienteInput.schema';
import { ConsultaCreateManyPacienteInputEnvelopeObjectSchema as ConsultaCreateManyPacienteInputEnvelopeObjectSchema } from './ConsultaCreateManyPacienteInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema as ConsultaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema } from './ConsultaUpdateWithWhereUniqueWithoutPacienteInput.schema';
import { ConsultaUpdateManyWithWhereWithoutPacienteInputObjectSchema as ConsultaUpdateManyWithWhereWithoutPacienteInputObjectSchema } from './ConsultaUpdateManyWithWhereWithoutPacienteInput.schema';
import { ConsultaScalarWhereInputObjectSchema as ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConsultaCreateWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaCreateWithoutPacienteInputObjectSchema).array(), z.lazy(() => ConsultaUncheckedCreateWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutPacienteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsultaCreateOrConnectWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaCreateOrConnectWithoutPacienteInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConsultaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConsultaCreateManyPacienteInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConsultaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConsultaUpdateManyWithWhereWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUpdateManyWithWhereWithoutPacienteInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConsultaScalarWhereInputObjectSchema), z.lazy(() => ConsultaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ConsultaUpdateManyWithoutPacienteNestedInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateManyWithoutPacienteNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateManyWithoutPacienteNestedInput>;
export const ConsultaUpdateManyWithoutPacienteNestedInputObjectZodSchema = makeSchema();
