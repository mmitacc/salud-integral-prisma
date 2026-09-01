import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateManyMedicoInputObjectSchema as ConsultaCreateManyMedicoInputObjectSchema } from './ConsultaCreateManyMedicoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ConsultaCreateManyMedicoInputObjectSchema), z.lazy(() => ConsultaCreateManyMedicoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ConsultaCreateManyMedicoInputEnvelopeObjectSchema: z.ZodType<Prisma.ConsultaCreateManyMedicoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateManyMedicoInputEnvelope>;
export const ConsultaCreateManyMedicoInputEnvelopeObjectZodSchema = makeSchema();
