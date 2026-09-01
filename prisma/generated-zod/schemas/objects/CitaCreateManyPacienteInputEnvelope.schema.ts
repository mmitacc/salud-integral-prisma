import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaCreateManyPacienteInputObjectSchema as CitaCreateManyPacienteInputObjectSchema } from './CitaCreateManyPacienteInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CitaCreateManyPacienteInputObjectSchema), z.lazy(() => CitaCreateManyPacienteInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CitaCreateManyPacienteInputEnvelopeObjectSchema: z.ZodType<Prisma.CitaCreateManyPacienteInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateManyPacienteInputEnvelope>;
export const CitaCreateManyPacienteInputEnvelopeObjectZodSchema = makeSchema();
