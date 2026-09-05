import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioUpdateWithoutMedicoInputObjectSchema as UsuarioUpdateWithoutMedicoInputObjectSchema } from './UsuarioUpdateWithoutMedicoInput.schema';
import { UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema as UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema } from './UsuarioUncheckedUpdateWithoutMedicoInput.schema';
import { UsuarioCreateWithoutMedicoInputObjectSchema as UsuarioCreateWithoutMedicoInputObjectSchema } from './UsuarioCreateWithoutMedicoInput.schema';
import { UsuarioUncheckedCreateWithoutMedicoInputObjectSchema as UsuarioUncheckedCreateWithoutMedicoInputObjectSchema } from './UsuarioUncheckedCreateWithoutMedicoInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UsuarioUpdateWithoutMedicoInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioCreateWithoutMedicoInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutMedicoInputObjectSchema)]),
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const UsuarioUpsertWithoutMedicoInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutMedicoInput>;
export const UsuarioUpsertWithoutMedicoInputObjectZodSchema = makeSchema();
