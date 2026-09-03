import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateWithoutPacienteInputObjectSchema as ConsultaCreateWithoutPacienteInputObjectSchema } from './ConsultaCreateWithoutPacienteInput.schema';
import { ConsultaUncheckedCreateWithoutPacienteInputObjectSchema as ConsultaUncheckedCreateWithoutPacienteInputObjectSchema } from './ConsultaUncheckedCreateWithoutPacienteInput.schema';
import { ConsultaCreateOrConnectWithoutPacienteInputObjectSchema as ConsultaCreateOrConnectWithoutPacienteInputObjectSchema } from './ConsultaCreateOrConnectWithoutPacienteInput.schema';
import { ConsultaCreateManyPacienteInputEnvelopeObjectSchema as ConsultaCreateManyPacienteInputEnvelopeObjectSchema } from './ConsultaCreateManyPacienteInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConsultaCreateWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaCreateWithoutPacienteInputObjectSchema).array(), z.lazy(() => ConsultaUncheckedCreateWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutPacienteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsultaCreateOrConnectWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaCreateOrConnectWithoutPacienteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConsultaCreateManyPacienteInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConsultaCreateNestedManyWithoutPacienteInputObjectSchema: z.ZodType<Prisma.ConsultaCreateNestedManyWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateNestedManyWithoutPacienteInput>;
export const ConsultaCreateNestedManyWithoutPacienteInputObjectZodSchema = makeSchema();
