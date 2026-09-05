import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { UsuarioUpdateWithoutMedicoInputObjectSchema as UsuarioUpdateWithoutMedicoInputObjectSchema } from './UsuarioUpdateWithoutMedicoInput.schema';
import { UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema as UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema } from './UsuarioUncheckedUpdateWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UsuarioUpdateWithoutMedicoInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema)])
}).strict();
export const UsuarioUpdateToOneWithWhereWithoutMedicoInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutMedicoInput>;
export const UsuarioUpdateToOneWithWhereWithoutMedicoInputObjectZodSchema = makeSchema();
