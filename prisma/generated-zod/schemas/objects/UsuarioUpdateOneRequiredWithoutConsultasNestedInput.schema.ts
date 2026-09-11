import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCreateWithoutConsultasInputObjectSchema as UsuarioCreateWithoutConsultasInputObjectSchema } from './UsuarioCreateWithoutConsultasInput.schema';
import { UsuarioUncheckedCreateWithoutConsultasInputObjectSchema as UsuarioUncheckedCreateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedCreateWithoutConsultasInput.schema';
import { UsuarioCreateOrConnectWithoutConsultasInputObjectSchema as UsuarioCreateOrConnectWithoutConsultasInputObjectSchema } from './UsuarioCreateOrConnectWithoutConsultasInput.schema';
import { UsuarioUpsertWithoutConsultasInputObjectSchema as UsuarioUpsertWithoutConsultasInputObjectSchema } from './UsuarioUpsertWithoutConsultasInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateToOneWithWhereWithoutConsultasInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutConsultasInputObjectSchema } from './UsuarioUpdateToOneWithWhereWithoutConsultasInput.schema';
import { UsuarioUpdateWithoutConsultasInputObjectSchema as UsuarioUpdateWithoutConsultasInputObjectSchema } from './UsuarioUpdateWithoutConsultasInput.schema';
import { UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema as UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedUpdateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutConsultasInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutConsultasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutConsultasInputObjectSchema).optional(),
  upsert: z.lazy(() => UsuarioUpsertWithoutConsultasInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UsuarioUpdateToOneWithWhereWithoutConsultasInputObjectSchema), z.lazy(() => UsuarioUpdateWithoutConsultasInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema)]).optional()
}).strict();
export const UsuarioUpdateOneRequiredWithoutConsultasNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutConsultasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutConsultasNestedInput>;
export const UsuarioUpdateOneRequiredWithoutConsultasNestedInputObjectZodSchema = makeSchema();
