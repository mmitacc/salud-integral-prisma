import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaScalarWhereInputObjectSchema as ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema';
import { ConsultaUpdateManyMutationInputObjectSchema as ConsultaUpdateManyMutationInputObjectSchema } from './ConsultaUpdateManyMutationInput.schema';
import { ConsultaUncheckedUpdateManyWithoutPacienteInputObjectSchema as ConsultaUncheckedUpdateManyWithoutPacienteInputObjectSchema } from './ConsultaUncheckedUpdateManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ConsultaUpdateManyMutationInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateManyWithoutPacienteInputObjectSchema)])
}).strict();
export const ConsultaUpdateManyWithWhereWithoutPacienteInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutPacienteInput>;
export const ConsultaUpdateManyWithWhereWithoutPacienteInputObjectZodSchema = makeSchema();
