import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCreateWithoutMedicoInputObjectSchema as UsuarioCreateWithoutMedicoInputObjectSchema } from './UsuarioCreateWithoutMedicoInput.schema';
import { UsuarioUncheckedCreateWithoutMedicoInputObjectSchema as UsuarioUncheckedCreateWithoutMedicoInputObjectSchema } from './UsuarioUncheckedCreateWithoutMedicoInput.schema';
import { UsuarioCreateOrConnectWithoutMedicoInputObjectSchema as UsuarioCreateOrConnectWithoutMedicoInputObjectSchema } from './UsuarioCreateOrConnectWithoutMedicoInput.schema';
import { UsuarioUpsertWithoutMedicoInputObjectSchema as UsuarioUpsertWithoutMedicoInputObjectSchema } from './UsuarioUpsertWithoutMedicoInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateToOneWithWhereWithoutMedicoInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutMedicoInputObjectSchema } from './UsuarioUpdateToOneWithWhereWithoutMedicoInput.schema';
import { UsuarioUpdateWithoutMedicoInputObjectSchema as UsuarioUpdateWithoutMedicoInputObjectSchema } from './UsuarioUpdateWithoutMedicoInput.schema';
import { UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema as UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema } from './UsuarioUncheckedUpdateWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutMedicoInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutMedicoInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutMedicoInputObjectSchema).optional(),
  upsert: z.lazy(() => UsuarioUpsertWithoutMedicoInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UsuarioUpdateToOneWithWhereWithoutMedicoInputObjectSchema), z.lazy(() => UsuarioUpdateWithoutMedicoInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutMedicoInputObjectSchema)]).optional()
}).strict();
export const UsuarioUpdateOneRequiredWithoutMedicoNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutMedicoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutMedicoNestedInput>;
export const UsuarioUpdateOneRequiredWithoutMedicoNestedInputObjectZodSchema = makeSchema();
