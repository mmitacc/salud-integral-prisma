import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCreateNestedManyWithoutEspecialidadInputObjectSchema as UsuarioCreateNestedManyWithoutEspecialidadInputObjectSchema } from './UsuarioCreateNestedManyWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  tipo: z.string().max(100),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  usuarios: z.lazy(() => UsuarioCreateNestedManyWithoutEspecialidadInputObjectSchema).optional()
}).strict();
export const EspecialidadCreateInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateInput>;
export const EspecialidadCreateInputObjectZodSchema = makeSchema();
