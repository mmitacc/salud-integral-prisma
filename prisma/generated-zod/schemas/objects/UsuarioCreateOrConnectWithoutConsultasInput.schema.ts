import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutConsultasInputObjectSchema as UsuarioCreateWithoutConsultasInputObjectSchema } from './UsuarioCreateWithoutConsultasInput.schema';
import { UsuarioUncheckedCreateWithoutConsultasInputObjectSchema as UsuarioUncheckedCreateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedCreateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioCreateWithoutConsultasInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutConsultasInputObjectSchema)])
}).strict();
export const UsuarioCreateOrConnectWithoutConsultasInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutConsultasInput>;
export const UsuarioCreateOrConnectWithoutConsultasInputObjectZodSchema = makeSchema();
