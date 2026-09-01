import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialCreateWithoutPacienteInputObjectSchema as HistorialCreateWithoutPacienteInputObjectSchema } from './HistorialCreateWithoutPacienteInput.schema';
import { HistorialUncheckedCreateWithoutPacienteInputObjectSchema as HistorialUncheckedCreateWithoutPacienteInputObjectSchema } from './HistorialUncheckedCreateWithoutPacienteInput.schema';
import { HistorialCreateOrConnectWithoutPacienteInputObjectSchema as HistorialCreateOrConnectWithoutPacienteInputObjectSchema } from './HistorialCreateOrConnectWithoutPacienteInput.schema';
import { HistorialUpsertWithWhereUniqueWithoutPacienteInputObjectSchema as HistorialUpsertWithWhereUniqueWithoutPacienteInputObjectSchema } from './HistorialUpsertWithWhereUniqueWithoutPacienteInput.schema';
import { HistorialCreateManyPacienteInputEnvelopeObjectSchema as HistorialCreateManyPacienteInputEnvelopeObjectSchema } from './HistorialCreateManyPacienteInputEnvelope.schema';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './HistorialWhereUniqueInput.schema';
import { HistorialUpdateWithWhereUniqueWithoutPacienteInputObjectSchema as HistorialUpdateWithWhereUniqueWithoutPacienteInputObjectSchema } from './HistorialUpdateWithWhereUniqueWithoutPacienteInput.schema';
import { HistorialUpdateManyWithWhereWithoutPacienteInputObjectSchema as HistorialUpdateManyWithWhereWithoutPacienteInputObjectSchema } from './HistorialUpdateManyWithWhereWithoutPacienteInput.schema';
import { HistorialScalarWhereInputObjectSchema as HistorialScalarWhereInputObjectSchema } from './HistorialScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HistorialCreateWithoutPacienteInputObjectSchema), z.lazy(() => HistorialCreateWithoutPacienteInputObjectSchema).array(), z.lazy(() => HistorialUncheckedCreateWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUncheckedCreateWithoutPacienteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HistorialCreateOrConnectWithoutPacienteInputObjectSchema), z.lazy(() => HistorialCreateOrConnectWithoutPacienteInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => HistorialUpsertWithWhereUniqueWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUpsertWithWhereUniqueWithoutPacienteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HistorialCreateManyPacienteInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => HistorialWhereUniqueInputObjectSchema), z.lazy(() => HistorialWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => HistorialWhereUniqueInputObjectSchema), z.lazy(() => HistorialWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => HistorialWhereUniqueInputObjectSchema), z.lazy(() => HistorialWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => HistorialWhereUniqueInputObjectSchema), z.lazy(() => HistorialWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => HistorialUpdateWithWhereUniqueWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUpdateWithWhereUniqueWithoutPacienteInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => HistorialUpdateManyWithWhereWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUpdateManyWithWhereWithoutPacienteInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => HistorialScalarWhereInputObjectSchema), z.lazy(() => HistorialScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const HistorialUpdateManyWithoutPacienteNestedInputObjectSchema: z.ZodType<Prisma.HistorialUpdateManyWithoutPacienteNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialUpdateManyWithoutPacienteNestedInput>;
export const HistorialUpdateManyWithoutPacienteNestedInputObjectZodSchema = makeSchema();
