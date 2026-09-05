import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutMedicoInputObjectSchema as UsuarioCreateWithoutMedicoInputObjectSchema } from './UsuarioCreateWithoutMedicoInput.schema';
import { UsuarioUncheckedCreateWithoutMedicoInputObjectSchema as UsuarioUncheckedCreateWithoutMedicoInputObjectSchema } from './UsuarioUncheckedCreateWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioCreateWithoutMedicoInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutMedicoInputObjectSchema)])
}).strict();
export const UsuarioCreateOrConnectWithoutMedicoInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutMedicoInput>;
export const UsuarioCreateOrConnectWithoutMedicoInputObjectZodSchema = makeSchema();
