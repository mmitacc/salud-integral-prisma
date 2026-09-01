import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialCreateManyPacienteInputObjectSchema as HistorialCreateManyPacienteInputObjectSchema } from './HistorialCreateManyPacienteInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => HistorialCreateManyPacienteInputObjectSchema), z.lazy(() => HistorialCreateManyPacienteInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const HistorialCreateManyPacienteInputEnvelopeObjectSchema: z.ZodType<Prisma.HistorialCreateManyPacienteInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.HistorialCreateManyPacienteInputEnvelope>;
export const HistorialCreateManyPacienteInputEnvelopeObjectZodSchema = makeSchema();
