import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioUpdateWithoutConsultasInputObjectSchema as UsuarioUpdateWithoutConsultasInputObjectSchema } from './UsuarioUpdateWithoutConsultasInput.schema';
import { UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema as UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedUpdateWithoutConsultasInput.schema';
import { UsuarioCreateWithoutConsultasInputObjectSchema as UsuarioCreateWithoutConsultasInputObjectSchema } from './UsuarioCreateWithoutConsultasInput.schema';
import { UsuarioUncheckedCreateWithoutConsultasInputObjectSchema as UsuarioUncheckedCreateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedCreateWithoutConsultasInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UsuarioUpdateWithoutConsultasInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioCreateWithoutConsultasInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutConsultasInputObjectSchema)]),
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const UsuarioUpsertWithoutConsultasInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutConsultasInput>;
export const UsuarioUpsertWithoutConsultasInputObjectZodSchema = makeSchema();
