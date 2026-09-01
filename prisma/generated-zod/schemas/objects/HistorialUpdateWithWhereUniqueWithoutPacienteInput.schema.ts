import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './HistorialWhereUniqueInput.schema';
import { HistorialUpdateWithoutPacienteInputObjectSchema as HistorialUpdateWithoutPacienteInputObjectSchema } from './HistorialUpdateWithoutPacienteInput.schema';
import { HistorialUncheckedUpdateWithoutPacienteInputObjectSchema as HistorialUncheckedUpdateWithoutPacienteInputObjectSchema } from './HistorialUncheckedUpdateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HistorialWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => HistorialUpdateWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUncheckedUpdateWithoutPacienteInputObjectSchema)])
}).strict();
export const HistorialUpdateWithWhereUniqueWithoutPacienteInputObjectSchema: z.ZodType<Prisma.HistorialUpdateWithWhereUniqueWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialUpdateWithWhereUniqueWithoutPacienteInput>;
export const HistorialUpdateWithWhereUniqueWithoutPacienteInputObjectZodSchema = makeSchema();
