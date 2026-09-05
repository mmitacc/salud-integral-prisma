import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCreateWithoutMedicoInputObjectSchema as UsuarioCreateWithoutMedicoInputObjectSchema } from './UsuarioCreateWithoutMedicoInput.schema';
import { UsuarioUncheckedCreateWithoutMedicoInputObjectSchema as UsuarioUncheckedCreateWithoutMedicoInputObjectSchema } from './UsuarioUncheckedCreateWithoutMedicoInput.schema';
import { UsuarioCreateOrConnectWithoutMedicoInputObjectSchema as UsuarioCreateOrConnectWithoutMedicoInputObjectSchema } from './UsuarioCreateOrConnectWithoutMedicoInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutMedicoInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutMedicoInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutMedicoInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional()
}).strict();
export const UsuarioCreateNestedOneWithoutMedicoInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutMedicoInput>;
export const UsuarioCreateNestedOneWithoutMedicoInputObjectZodSchema = makeSchema();
