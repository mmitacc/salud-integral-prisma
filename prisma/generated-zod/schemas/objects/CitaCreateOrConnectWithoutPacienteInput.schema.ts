import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './CitaWhereUniqueInput.schema';
import { CitaCreateWithoutPacienteInputObjectSchema as CitaCreateWithoutPacienteInputObjectSchema } from './CitaCreateWithoutPacienteInput.schema';
import { CitaUncheckedCreateWithoutPacienteInputObjectSchema as CitaUncheckedCreateWithoutPacienteInputObjectSchema } from './CitaUncheckedCreateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CitaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CitaCreateWithoutPacienteInputObjectSchema), z.lazy(() => CitaUncheckedCreateWithoutPacienteInputObjectSchema)])
}).strict();
export const CitaCreateOrConnectWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaCreateOrConnectWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateOrConnectWithoutPacienteInput>;
export const CitaCreateOrConnectWithoutPacienteInputObjectZodSchema = makeSchema();
