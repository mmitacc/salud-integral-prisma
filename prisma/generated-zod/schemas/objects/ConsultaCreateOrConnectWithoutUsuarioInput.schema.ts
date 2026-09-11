import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaCreateWithoutUsuarioInputObjectSchema as ConsultaCreateWithoutUsuarioInputObjectSchema } from './ConsultaCreateWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema as ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConsultaCreateOrConnectWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateOrConnectWithoutUsuarioInput>;
export const ConsultaCreateOrConnectWithoutUsuarioInputObjectZodSchema = makeSchema();
