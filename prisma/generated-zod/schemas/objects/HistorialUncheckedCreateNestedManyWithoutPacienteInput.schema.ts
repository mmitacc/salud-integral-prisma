import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialCreateWithoutPacienteInputObjectSchema as HistorialCreateWithoutPacienteInputObjectSchema } from './HistorialCreateWithoutPacienteInput.schema';
import { HistorialUncheckedCreateWithoutPacienteInputObjectSchema as HistorialUncheckedCreateWithoutPacienteInputObjectSchema } from './HistorialUncheckedCreateWithoutPacienteInput.schema';
import { HistorialCreateOrConnectWithoutPacienteInputObjectSchema as HistorialCreateOrConnectWithoutPacienteInputObjectSchema } from './HistorialCreateOrConnectWithoutPacienteInput.schema';
import { HistorialCreateManyPacienteInputEnvelopeObjectSchema as HistorialCreateManyPacienteInputEnvelopeObjectSchema } from './HistorialCreateManyPacienteInputEnvelope.schema';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './HistorialWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HistorialCreateWithoutPacienteInputObjectSchema), z.lazy(() => HistorialCreateWithoutPacienteInputObjectSchema).array(), z.lazy(() => HistorialUncheckedCreateWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUncheckedCreateWithoutPacienteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HistorialCreateOrConnectWithoutPacienteInputObjectSchema), z.lazy(() => HistorialCreateOrConnectWithoutPacienteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HistorialCreateManyPacienteInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => HistorialWhereUniqueInputObjectSchema), z.lazy(() => HistorialWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const HistorialUncheckedCreateNestedManyWithoutPacienteInputObjectSchema: z.ZodType<Prisma.HistorialUncheckedCreateNestedManyWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialUncheckedCreateNestedManyWithoutPacienteInput>;
export const HistorialUncheckedCreateNestedManyWithoutPacienteInputObjectZodSchema = makeSchema();
