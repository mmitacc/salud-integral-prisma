import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutPacienteInputObjectSchema as ConsultaUpdateWithoutPacienteInputObjectSchema } from './ConsultaUpdateWithoutPacienteInput.schema';
import { ConsultaUncheckedUpdateWithoutPacienteInputObjectSchema as ConsultaUncheckedUpdateWithoutPacienteInputObjectSchema } from './ConsultaUncheckedUpdateWithoutPacienteInput.schema';
import { ConsultaCreateWithoutPacienteInputObjectSchema as ConsultaCreateWithoutPacienteInputObjectSchema } from './ConsultaCreateWithoutPacienteInput.schema';
import { ConsultaUncheckedCreateWithoutPacienteInputObjectSchema as ConsultaUncheckedCreateWithoutPacienteInputObjectSchema } from './ConsultaUncheckedCreateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ConsultaUpdateWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateWithoutPacienteInputObjectSchema)]),
  create: z.union([z.lazy(() => ConsultaCreateWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutPacienteInputObjectSchema)])
}).strict();
export const ConsultaUpsertWithWhereUniqueWithoutPacienteInputObjectSchema: z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutPacienteInput>;
export const ConsultaUpsertWithWhereUniqueWithoutPacienteInputObjectZodSchema = makeSchema();
