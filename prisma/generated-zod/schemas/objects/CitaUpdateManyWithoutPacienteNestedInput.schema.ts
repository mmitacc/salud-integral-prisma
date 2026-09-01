import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaCreateWithoutPacienteInputObjectSchema as CitaCreateWithoutPacienteInputObjectSchema } from './CitaCreateWithoutPacienteInput.schema';
import { CitaUncheckedCreateWithoutPacienteInputObjectSchema as CitaUncheckedCreateWithoutPacienteInputObjectSchema } from './CitaUncheckedCreateWithoutPacienteInput.schema';
import { CitaCreateOrConnectWithoutPacienteInputObjectSchema as CitaCreateOrConnectWithoutPacienteInputObjectSchema } from './CitaCreateOrConnectWithoutPacienteInput.schema';
import { CitaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema as CitaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema } from './CitaUpsertWithWhereUniqueWithoutPacienteInput.schema';
import { CitaCreateManyPacienteInputEnvelopeObjectSchema as CitaCreateManyPacienteInputEnvelopeObjectSchema } from './CitaCreateManyPacienteInputEnvelope.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './CitaWhereUniqueInput.schema';
import { CitaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema as CitaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema } from './CitaUpdateWithWhereUniqueWithoutPacienteInput.schema';
import { CitaUpdateManyWithWhereWithoutPacienteInputObjectSchema as CitaUpdateManyWithWhereWithoutPacienteInputObjectSchema } from './CitaUpdateManyWithWhereWithoutPacienteInput.schema';
import { CitaScalarWhereInputObjectSchema as CitaScalarWhereInputObjectSchema } from './CitaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CitaCreateWithoutPacienteInputObjectSchema), z.lazy(() => CitaCreateWithoutPacienteInputObjectSchema).array(), z.lazy(() => CitaUncheckedCreateWithoutPacienteInputObjectSchema), z.lazy(() => CitaUncheckedCreateWithoutPacienteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CitaCreateOrConnectWithoutPacienteInputObjectSchema), z.lazy(() => CitaCreateOrConnectWithoutPacienteInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CitaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema), z.lazy(() => CitaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CitaCreateManyPacienteInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CitaWhereUniqueInputObjectSchema), z.lazy(() => CitaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CitaWhereUniqueInputObjectSchema), z.lazy(() => CitaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CitaWhereUniqueInputObjectSchema), z.lazy(() => CitaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CitaWhereUniqueInputObjectSchema), z.lazy(() => CitaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CitaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema), z.lazy(() => CitaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CitaUpdateManyWithWhereWithoutPacienteInputObjectSchema), z.lazy(() => CitaUpdateManyWithWhereWithoutPacienteInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CitaScalarWhereInputObjectSchema), z.lazy(() => CitaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CitaUpdateManyWithoutPacienteNestedInputObjectSchema: z.ZodType<Prisma.CitaUpdateManyWithoutPacienteNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateManyWithoutPacienteNestedInput>;
export const CitaUpdateManyWithoutPacienteNestedInputObjectZodSchema = makeSchema();
