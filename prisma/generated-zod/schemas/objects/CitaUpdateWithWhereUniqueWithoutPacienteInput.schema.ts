import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './CitaWhereUniqueInput.schema';
import { CitaUpdateWithoutPacienteInputObjectSchema as CitaUpdateWithoutPacienteInputObjectSchema } from './CitaUpdateWithoutPacienteInput.schema';
import { CitaUncheckedUpdateWithoutPacienteInputObjectSchema as CitaUncheckedUpdateWithoutPacienteInputObjectSchema } from './CitaUncheckedUpdateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CitaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CitaUpdateWithoutPacienteInputObjectSchema), z.lazy(() => CitaUncheckedUpdateWithoutPacienteInputObjectSchema)])
}).strict();
export const CitaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaUpdateWithWhereUniqueWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateWithWhereUniqueWithoutPacienteInput>;
export const CitaUpdateWithWhereUniqueWithoutPacienteInputObjectZodSchema = makeSchema();
