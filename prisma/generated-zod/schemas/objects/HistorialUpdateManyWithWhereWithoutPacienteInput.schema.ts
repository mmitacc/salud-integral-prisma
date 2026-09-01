import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialScalarWhereInputObjectSchema as HistorialScalarWhereInputObjectSchema } from './HistorialScalarWhereInput.schema';
import { HistorialUpdateManyMutationInputObjectSchema as HistorialUpdateManyMutationInputObjectSchema } from './HistorialUpdateManyMutationInput.schema';
import { HistorialUncheckedUpdateManyWithoutPacienteInputObjectSchema as HistorialUncheckedUpdateManyWithoutPacienteInputObjectSchema } from './HistorialUncheckedUpdateManyWithoutPacienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HistorialScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HistorialUpdateManyMutationInputObjectSchema), z.lazy(() => HistorialUncheckedUpdateManyWithoutPacienteInputObjectSchema)])
}).strict();
export const HistorialUpdateManyWithWhereWithoutPacienteInputObjectSchema: z.ZodType<Prisma.HistorialUpdateManyWithWhereWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialUpdateManyWithWhereWithoutPacienteInput>;
export const HistorialUpdateManyWithWhereWithoutPacienteInputObjectZodSchema = makeSchema();
