import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './EspecialidadWhereUniqueInput.schema';
import { EspecialidadCreateWithoutUsuariosInputObjectSchema as EspecialidadCreateWithoutUsuariosInputObjectSchema } from './EspecialidadCreateWithoutUsuariosInput.schema';
import { EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema as EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema } from './EspecialidadUncheckedCreateWithoutUsuariosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EspecialidadWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EspecialidadCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema)])
}).strict();
export const EspecialidadCreateOrConnectWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateOrConnectWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateOrConnectWithoutUsuariosInput>;
export const EspecialidadCreateOrConnectWithoutUsuariosInputObjectZodSchema = makeSchema();
