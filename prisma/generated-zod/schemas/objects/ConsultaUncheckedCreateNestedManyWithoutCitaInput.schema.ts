import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateWithoutCitaInputObjectSchema as ConsultaCreateWithoutCitaInputObjectSchema } from './ConsultaCreateWithoutCitaInput.schema';
import { ConsultaUncheckedCreateWithoutCitaInputObjectSchema as ConsultaUncheckedCreateWithoutCitaInputObjectSchema } from './ConsultaUncheckedCreateWithoutCitaInput.schema';
import { ConsultaCreateOrConnectWithoutCitaInputObjectSchema as ConsultaCreateOrConnectWithoutCitaInputObjectSchema } from './ConsultaCreateOrConnectWithoutCitaInput.schema';
import { ConsultaCreateManyCitaInputEnvelopeObjectSchema as ConsultaCreateManyCitaInputEnvelopeObjectSchema } from './ConsultaCreateManyCitaInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConsultaCreateWithoutCitaInputObjectSchema), z.lazy(() => ConsultaCreateWithoutCitaInputObjectSchema).array(), z.lazy(() => ConsultaUncheckedCreateWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutCitaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsultaCreateOrConnectWithoutCitaInputObjectSchema), z.lazy(() => ConsultaCreateOrConnectWithoutCitaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConsultaCreateManyCitaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConsultaUncheckedCreateNestedManyWithoutCitaInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedCreateNestedManyWithoutCitaInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedCreateNestedManyWithoutCitaInput>;
export const ConsultaUncheckedCreateNestedManyWithoutCitaInputObjectZodSchema = makeSchema();
