import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateManyPacienteInputObjectSchema as ConsultaCreateManyPacienteInputObjectSchema } from './ConsultaCreateManyPacienteInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ConsultaCreateManyPacienteInputObjectSchema), z.lazy(() => ConsultaCreateManyPacienteInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ConsultaCreateManyPacienteInputEnvelopeObjectSchema: z.ZodType<Prisma.ConsultaCreateManyPacienteInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateManyPacienteInputEnvelope>;
export const ConsultaCreateManyPacienteInputEnvelopeObjectZodSchema = makeSchema();
