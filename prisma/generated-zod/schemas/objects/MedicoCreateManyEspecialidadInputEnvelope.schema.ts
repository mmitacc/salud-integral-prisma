import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateManyEspecialidadInputObjectSchema as MedicoCreateManyEspecialidadInputObjectSchema } from './MedicoCreateManyEspecialidadInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MedicoCreateManyEspecialidadInputObjectSchema), z.lazy(() => MedicoCreateManyEspecialidadInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MedicoCreateManyEspecialidadInputEnvelopeObjectSchema: z.ZodType<Prisma.MedicoCreateManyEspecialidadInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateManyEspecialidadInputEnvelope>;
export const MedicoCreateManyEspecialidadInputEnvelopeObjectZodSchema = makeSchema();
