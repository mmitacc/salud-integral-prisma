import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { UsuarioUpdateWithoutConsultasInputObjectSchema as UsuarioUpdateWithoutConsultasInputObjectSchema } from './UsuarioUpdateWithoutConsultasInput.schema';
import { UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema as UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedUpdateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UsuarioUpdateWithoutConsultasInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema)])
}).strict();
export const UsuarioUpdateToOneWithWhereWithoutConsultasInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutConsultasInput>;
export const UsuarioUpdateToOneWithWhereWithoutConsultasInputObjectZodSchema = makeSchema();
