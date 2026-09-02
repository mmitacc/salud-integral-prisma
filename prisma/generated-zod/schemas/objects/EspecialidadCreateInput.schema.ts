import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateNestedManyWithoutEspecialidadInputObjectSchema as MedicoCreateNestedManyWithoutEspecialidadInputObjectSchema } from './MedicoCreateNestedManyWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  tipo: z.string().max(100),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  medicos: z.lazy(() => MedicoCreateNestedManyWithoutEspecialidadInputObjectSchema).optional()
}).strict();
export const EspecialidadCreateInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateInput>;
export const EspecialidadCreateInputObjectZodSchema = makeSchema();
