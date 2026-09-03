import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutPacienteInputObjectSchema as ConsultaUpdateWithoutPacienteInputObjectSchema } from './ConsultaUpdateWithoutPacienteInput.schema';
import { ConsultaUncheckedUpdateWithoutPacienteInputObjectSchema as ConsultaUncheckedUpdateWithoutPacienteInputObjectSchema } from './ConsultaUncheckedUpdateWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ConsultaUpdateWithoutPacienteInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateWithoutPacienteInputObjectSchema)])
}).strict();
export const ConsultaUpdateWithWhereUniqueWithoutPacienteInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutPacienteInput>;
export const ConsultaUpdateWithWhereUniqueWithoutPacienteInputObjectZodSchema = makeSchema();
