import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutUsuarioInputObjectSchema as ConsultaUpdateWithoutUsuarioInputObjectSchema } from './ConsultaUpdateWithoutUsuarioInput.schema';
import { ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema as ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedUpdateWithoutUsuarioInput.schema';
import { ConsultaCreateWithoutUsuarioInputObjectSchema as ConsultaCreateWithoutUsuarioInputObjectSchema } from './ConsultaCreateWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema as ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ConsultaUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
  create: z.union([z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutUsuarioInput>;
export const ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
