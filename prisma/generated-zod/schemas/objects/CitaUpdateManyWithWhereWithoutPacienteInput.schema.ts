import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaScalarWhereInputObjectSchema as CitaScalarWhereInputObjectSchema } from './CitaScalarWhereInput.schema';
import { CitaUpdateManyMutationInputObjectSchema as CitaUpdateManyMutationInputObjectSchema } from './CitaUpdateManyMutationInput.schema';
import { CitaUncheckedUpdateManyWithoutPacienteInputObjectSchema as CitaUncheckedUpdateManyWithoutPacienteInputObjectSchema } from './CitaUncheckedUpdateManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CitaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CitaUpdateManyMutationInputObjectSchema), z.lazy(() => CitaUncheckedUpdateManyWithoutPacienteInputObjectSchema)])
}).strict();
export const CitaUpdateManyWithWhereWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaUpdateManyWithWhereWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateManyWithWhereWithoutPacienteInput>;
export const CitaUpdateManyWithWhereWithoutPacienteInputObjectZodSchema = makeSchema();
