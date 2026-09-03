import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaCreateWithoutPacienteInputObjectSchema as ConsultaCreateWithoutPacienteInputObjectSchema } from './ConsultaCreateWithoutPacienteInput.schema';
import { ConsultaUncheckedCreateWithoutPacienteInputObjectSchema as ConsultaUncheckedCreateWithoutPacienteInputObjectSchema } from './ConsultaUncheckedCreateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConsultaCreateWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutPacienteInputObjectSchema)])
}).strict();
export const ConsultaCreateOrConnectWithoutPacienteInputObjectSchema: z.ZodType<Prisma.ConsultaCreateOrConnectWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateOrConnectWithoutPacienteInput>;
export const ConsultaCreateOrConnectWithoutPacienteInputObjectZodSchema = makeSchema();
