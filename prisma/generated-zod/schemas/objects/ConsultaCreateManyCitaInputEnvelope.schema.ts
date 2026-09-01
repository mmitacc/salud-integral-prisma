import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateManyCitaInputObjectSchema as ConsultaCreateManyCitaInputObjectSchema } from './ConsultaCreateManyCitaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ConsultaCreateManyCitaInputObjectSchema), z.lazy(() => ConsultaCreateManyCitaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ConsultaCreateManyCitaInputEnvelopeObjectSchema: z.ZodType<Prisma.ConsultaCreateManyCitaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateManyCitaInputEnvelope>;
export const ConsultaCreateManyCitaInputEnvelopeObjectZodSchema = makeSchema();
