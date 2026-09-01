import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './CitaWhereUniqueInput.schema';
import { CitaUpdateWithoutPacienteInputObjectSchema as CitaUpdateWithoutPacienteInputObjectSchema } from './CitaUpdateWithoutPacienteInput.schema';
import { CitaUncheckedUpdateWithoutPacienteInputObjectSchema as CitaUncheckedUpdateWithoutPacienteInputObjectSchema } from './CitaUncheckedUpdateWithoutPacienteInput.schema';
import { CitaCreateWithoutPacienteInputObjectSchema as CitaCreateWithoutPacienteInputObjectSchema } from './CitaCreateWithoutPacienteInput.schema';
import { CitaUncheckedCreateWithoutPacienteInputObjectSchema as CitaUncheckedCreateWithoutPacienteInputObjectSchema } from './CitaUncheckedCreateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CitaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CitaUpdateWithoutPacienteInputObjectSchema), z.lazy(() => CitaUncheckedUpdateWithoutPacienteInputObjectSchema)]),
  create: z.union([z.lazy(() => CitaCreateWithoutPacienteInputObjectSchema), z.lazy(() => CitaUncheckedCreateWithoutPacienteInputObjectSchema)])
}).strict();
export const CitaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaUpsertWithWhereUniqueWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpsertWithWhereUniqueWithoutPacienteInput>;
export const CitaUpsertWithWhereUniqueWithoutPacienteInputObjectZodSchema = makeSchema();
