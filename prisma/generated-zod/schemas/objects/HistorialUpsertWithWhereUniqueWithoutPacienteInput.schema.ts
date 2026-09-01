import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './HistorialWhereUniqueInput.schema';
import { HistorialUpdateWithoutPacienteInputObjectSchema as HistorialUpdateWithoutPacienteInputObjectSchema } from './HistorialUpdateWithoutPacienteInput.schema';
import { HistorialUncheckedUpdateWithoutPacienteInputObjectSchema as HistorialUncheckedUpdateWithoutPacienteInputObjectSchema } from './HistorialUncheckedUpdateWithoutPacienteInput.schema';
import { HistorialCreateWithoutPacienteInputObjectSchema as HistorialCreateWithoutPacienteInputObjectSchema } from './HistorialCreateWithoutPacienteInput.schema';
import { HistorialUncheckedCreateWithoutPacienteInputObjectSchema as HistorialUncheckedCreateWithoutPacienteInputObjectSchema } from './HistorialUncheckedCreateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HistorialWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => HistorialUpdateWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUncheckedUpdateWithoutPacienteInputObjectSchema)]),
  create: z.union([z.lazy(() => HistorialCreateWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUncheckedCreateWithoutPacienteInputObjectSchema)])
}).strict();
export const HistorialUpsertWithWhereUniqueWithoutPacienteInputObjectSchema: z.ZodType<Prisma.HistorialUpsertWithWhereUniqueWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialUpsertWithWhereUniqueWithoutPacienteInput>;
export const HistorialUpsertWithWhereUniqueWithoutPacienteInputObjectZodSchema = makeSchema();
