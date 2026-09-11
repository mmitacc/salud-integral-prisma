import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateWithoutUsuarioInputObjectSchema as ConsultaCreateWithoutUsuarioInputObjectSchema } from './ConsultaCreateWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema as ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateWithoutUsuarioInput.schema';
import { ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema as ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema } from './ConsultaCreateOrConnectWithoutUsuarioInput.schema';
import { ConsultaCreateManyUsuarioInputEnvelopeObjectSchema as ConsultaCreateManyUsuarioInputEnvelopeObjectSchema } from './ConsultaCreateManyUsuarioInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema).array(), z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConsultaCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConsultaCreateNestedManyWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConsultaCreateNestedManyWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateNestedManyWithoutUsuarioInput>;
export const ConsultaCreateNestedManyWithoutUsuarioInputObjectZodSchema = makeSchema();
