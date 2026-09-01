import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateWithoutCitaInputObjectSchema as ConsultaCreateWithoutCitaInputObjectSchema } from './ConsultaCreateWithoutCitaInput.schema';
import { ConsultaUncheckedCreateWithoutCitaInputObjectSchema as ConsultaUncheckedCreateWithoutCitaInputObjectSchema } from './ConsultaUncheckedCreateWithoutCitaInput.schema';
import { ConsultaCreateOrConnectWithoutCitaInputObjectSchema as ConsultaCreateOrConnectWithoutCitaInputObjectSchema } from './ConsultaCreateOrConnectWithoutCitaInput.schema';
import { ConsultaUpsertWithWhereUniqueWithoutCitaInputObjectSchema as ConsultaUpsertWithWhereUniqueWithoutCitaInputObjectSchema } from './ConsultaUpsertWithWhereUniqueWithoutCitaInput.schema';
import { ConsultaCreateManyCitaInputEnvelopeObjectSchema as ConsultaCreateManyCitaInputEnvelopeObjectSchema } from './ConsultaCreateManyCitaInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithWhereUniqueWithoutCitaInputObjectSchema as ConsultaUpdateWithWhereUniqueWithoutCitaInputObjectSchema } from './ConsultaUpdateWithWhereUniqueWithoutCitaInput.schema';
import { ConsultaUpdateManyWithWhereWithoutCitaInputObjectSchema as ConsultaUpdateManyWithWhereWithoutCitaInputObjectSchema } from './ConsultaUpdateManyWithWhereWithoutCitaInput.schema';
import { ConsultaScalarWhereInputObjectSchema as ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConsultaCreateWithoutCitaInputObjectSchema), z.lazy(() => ConsultaCreateWithoutCitaInputObjectSchema).array(), z.lazy(() => ConsultaUncheckedCreateWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutCitaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsultaCreateOrConnectWithoutCitaInputObjectSchema), z.lazy(() => ConsultaCreateOrConnectWithoutCitaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConsultaUpsertWithWhereUniqueWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUpsertWithWhereUniqueWithoutCitaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConsultaCreateManyCitaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConsultaWhereUniqueInputObjectSchema), z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConsultaUpdateWithWhereUniqueWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUpdateWithWhereUniqueWithoutCitaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConsultaUpdateManyWithWhereWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUpdateManyWithWhereWithoutCitaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConsultaScalarWhereInputObjectSchema), z.lazy(() => ConsultaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ConsultaUpdateManyWithoutCitaNestedInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateManyWithoutCitaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateManyWithoutCitaNestedInput>;
export const ConsultaUpdateManyWithoutCitaNestedInputObjectZodSchema = makeSchema();
