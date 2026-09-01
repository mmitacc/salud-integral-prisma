import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutCitaInputObjectSchema as ConsultaUpdateWithoutCitaInputObjectSchema } from './ConsultaUpdateWithoutCitaInput.schema';
import { ConsultaUncheckedUpdateWithoutCitaInputObjectSchema as ConsultaUncheckedUpdateWithoutCitaInputObjectSchema } from './ConsultaUncheckedUpdateWithoutCitaInput.schema';
import { ConsultaCreateWithoutCitaInputObjectSchema as ConsultaCreateWithoutCitaInputObjectSchema } from './ConsultaCreateWithoutCitaInput.schema';
import { ConsultaUncheckedCreateWithoutCitaInputObjectSchema as ConsultaUncheckedCreateWithoutCitaInputObjectSchema } from './ConsultaUncheckedCreateWithoutCitaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ConsultaUpdateWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateWithoutCitaInputObjectSchema)]),
  create: z.union([z.lazy(() => ConsultaCreateWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutCitaInputObjectSchema)])
}).strict();
export const ConsultaUpsertWithWhereUniqueWithoutCitaInputObjectSchema: z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutCitaInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutCitaInput>;
export const ConsultaUpsertWithWhereUniqueWithoutCitaInputObjectZodSchema = makeSchema();
