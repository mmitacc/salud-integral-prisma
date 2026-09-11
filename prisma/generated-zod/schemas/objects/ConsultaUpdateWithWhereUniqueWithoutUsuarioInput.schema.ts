import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutUsuarioInputObjectSchema as ConsultaUpdateWithoutUsuarioInputObjectSchema } from './ConsultaUpdateWithoutUsuarioInput.schema';
import { ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema as ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedUpdateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ConsultaUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema)])
}).strict();
export const ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutUsuarioInput>;
export const ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
