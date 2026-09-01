import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateWithoutMedicoInputObjectSchema as ConsultaCreateWithoutMedicoInputObjectSchema } from './ConsultaCreateWithoutMedicoInput.schema';
import { ConsultaUncheckedCreateWithoutMedicoInputObjectSchema as ConsultaUncheckedCreateWithoutMedicoInputObjectSchema } from './ConsultaUncheckedCreateWithoutMedicoInput.schema';
import { ConsultaCreateOrConnectWithoutMedicoInputObjectSchema as ConsultaCreateOrConnectWithoutMedicoInputObjectSchema } from './ConsultaCreateOrConnectWithoutMedicoInput.schema';
import { ConsultaCreateManyMedicoInputEnvelopeObjectSchema as ConsultaCreateManyMedicoInputEnvelopeObjectSchema } from './ConsultaCreateManyMedicoInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConsultaCreateWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaCreateWithoutMedicoInputObjectSchema).array(), z.lazy(() => ConsultaUncheckedCreateWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutMedicoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsultaCreateOrConnectWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaCreateOrConnectWithoutMedicoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConsultaCreateManyMedicoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedCreateNestedManyWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedCreateNestedManyWithoutMedicoInput>;
export const ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectZodSchema = makeSchema();
