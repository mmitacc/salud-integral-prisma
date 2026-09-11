import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCreateWithoutConsultasInputObjectSchema as UsuarioCreateWithoutConsultasInputObjectSchema } from './UsuarioCreateWithoutConsultasInput.schema';
import { UsuarioUncheckedCreateWithoutConsultasInputObjectSchema as UsuarioUncheckedCreateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedCreateWithoutConsultasInput.schema';
import { UsuarioCreateOrConnectWithoutConsultasInputObjectSchema as UsuarioCreateOrConnectWithoutConsultasInputObjectSchema } from './UsuarioCreateOrConnectWithoutConsultasInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutConsultasInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutConsultasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutConsultasInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional()
}).strict();
export const UsuarioCreateNestedOneWithoutConsultasInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutConsultasInput>;
export const UsuarioCreateNestedOneWithoutConsultasInputObjectZodSchema = makeSchema();
