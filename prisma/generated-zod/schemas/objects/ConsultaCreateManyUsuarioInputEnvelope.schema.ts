import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateManyUsuarioInputObjectSchema as ConsultaCreateManyUsuarioInputObjectSchema } from './ConsultaCreateManyUsuarioInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ConsultaCreateManyUsuarioInputObjectSchema), z.lazy(() => ConsultaCreateManyUsuarioInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ConsultaCreateManyUsuarioInputEnvelopeObjectSchema: z.ZodType<Prisma.ConsultaCreateManyUsuarioInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateManyUsuarioInputEnvelope>;
export const ConsultaCreateManyUsuarioInputEnvelopeObjectZodSchema = makeSchema();
