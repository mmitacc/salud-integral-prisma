import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './HistorialWhereUniqueInput.schema';
import { HistorialCreateWithoutPacienteInputObjectSchema as HistorialCreateWithoutPacienteInputObjectSchema } from './HistorialCreateWithoutPacienteInput.schema';
import { HistorialUncheckedCreateWithoutPacienteInputObjectSchema as HistorialUncheckedCreateWithoutPacienteInputObjectSchema } from './HistorialUncheckedCreateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HistorialWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HistorialCreateWithoutPacienteInputObjectSchema), z.lazy(() => HistorialUncheckedCreateWithoutPacienteInputObjectSchema)])
}).strict();
export const HistorialCreateOrConnectWithoutPacienteInputObjectSchema: z.ZodType<Prisma.HistorialCreateOrConnectWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialCreateOrConnectWithoutPacienteInput>;
export const HistorialCreateOrConnectWithoutPacienteInputObjectZodSchema = makeSchema();
