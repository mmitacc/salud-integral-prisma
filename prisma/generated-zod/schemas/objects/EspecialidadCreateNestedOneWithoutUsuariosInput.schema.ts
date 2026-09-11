import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadCreateWithoutUsuariosInputObjectSchema as EspecialidadCreateWithoutUsuariosInputObjectSchema } from './EspecialidadCreateWithoutUsuariosInput.schema';
import { EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema as EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema } from './EspecialidadUncheckedCreateWithoutUsuariosInput.schema';
import { EspecialidadCreateOrConnectWithoutUsuariosInputObjectSchema as EspecialidadCreateOrConnectWithoutUsuariosInputObjectSchema } from './EspecialidadCreateOrConnectWithoutUsuariosInput.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './EspecialidadWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EspecialidadCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EspecialidadCreateOrConnectWithoutUsuariosInputObjectSchema).optional(),
  connect: z.lazy(() => EspecialidadWhereUniqueInputObjectSchema).optional()
}).strict();
export const EspecialidadCreateNestedOneWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateNestedOneWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateNestedOneWithoutUsuariosInput>;
export const EspecialidadCreateNestedOneWithoutUsuariosInputObjectZodSchema = makeSchema();
