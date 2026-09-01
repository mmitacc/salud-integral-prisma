import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaCreateWithoutPacienteInputObjectSchema as CitaCreateWithoutPacienteInputObjectSchema } from './CitaCreateWithoutPacienteInput.schema';
import { CitaUncheckedCreateWithoutPacienteInputObjectSchema as CitaUncheckedCreateWithoutPacienteInputObjectSchema } from './CitaUncheckedCreateWithoutPacienteInput.schema';
import { CitaCreateOrConnectWithoutPacienteInputObjectSchema as CitaCreateOrConnectWithoutPacienteInputObjectSchema } from './CitaCreateOrConnectWithoutPacienteInput.schema';
import { CitaCreateManyPacienteInputEnvelopeObjectSchema as CitaCreateManyPacienteInputEnvelopeObjectSchema } from './CitaCreateManyPacienteInputEnvelope.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './CitaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CitaCreateWithoutPacienteInputObjectSchema), z.lazy(() => CitaCreateWithoutPacienteInputObjectSchema).array(), z.lazy(() => CitaUncheckedCreateWithoutPacienteInputObjectSchema), z.lazy(() => CitaUncheckedCreateWithoutPacienteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CitaCreateOrConnectWithoutPacienteInputObjectSchema), z.lazy(() => CitaCreateOrConnectWithoutPacienteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CitaCreateManyPacienteInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CitaWhereUniqueInputObjectSchema), z.lazy(() => CitaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CitaCreateNestedManyWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaCreateNestedManyWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateNestedManyWithoutPacienteInput>;
export const CitaCreateNestedManyWithoutPacienteInputObjectZodSchema = makeSchema();
