import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCreateManyEspecialidadInputObjectSchema as UsuarioCreateManyEspecialidadInputObjectSchema } from './UsuarioCreateManyEspecialidadInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UsuarioCreateManyEspecialidadInputObjectSchema), z.lazy(() => UsuarioCreateManyEspecialidadInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UsuarioCreateManyEspecialidadInputEnvelopeObjectSchema: z.ZodType<Prisma.UsuarioCreateManyEspecialidadInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateManyEspecialidadInputEnvelope>;
export const UsuarioCreateManyEspecialidadInputEnvelopeObjectZodSchema = makeSchema();
