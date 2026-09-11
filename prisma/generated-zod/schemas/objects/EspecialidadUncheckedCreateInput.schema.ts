import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioUncheckedCreateNestedManyWithoutEspecialidadInputObjectSchema as UsuarioUncheckedCreateNestedManyWithoutEspecialidadInputObjectSchema } from './UsuarioUncheckedCreateNestedManyWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  tipo: z.string().max(100),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  usuarios: z.lazy(() => UsuarioUncheckedCreateNestedManyWithoutEspecialidadInputObjectSchema).optional()
}).strict();
export const EspecialidadUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EspecialidadUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUncheckedCreateInput>;
export const EspecialidadUncheckedCreateInputObjectZodSchema = makeSchema();
