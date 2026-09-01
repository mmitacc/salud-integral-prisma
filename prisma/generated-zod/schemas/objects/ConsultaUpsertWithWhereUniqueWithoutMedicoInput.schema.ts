import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutMedicoInputObjectSchema as ConsultaUpdateWithoutMedicoInputObjectSchema } from './ConsultaUpdateWithoutMedicoInput.schema';
import { ConsultaUncheckedUpdateWithoutMedicoInputObjectSchema as ConsultaUncheckedUpdateWithoutMedicoInputObjectSchema } from './ConsultaUncheckedUpdateWithoutMedicoInput.schema';
import { ConsultaCreateWithoutMedicoInputObjectSchema as ConsultaCreateWithoutMedicoInputObjectSchema } from './ConsultaCreateWithoutMedicoInput.schema';
import { ConsultaUncheckedCreateWithoutMedicoInputObjectSchema as ConsultaUncheckedCreateWithoutMedicoInputObjectSchema } from './ConsultaUncheckedCreateWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ConsultaUpdateWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateWithoutMedicoInputObjectSchema)]),
  create: z.union([z.lazy(() => ConsultaCreateWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutMedicoInputObjectSchema)])
}).strict();
export const ConsultaUpsertWithWhereUniqueWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutMedicoInput>;
export const ConsultaUpsertWithWhereUniqueWithoutMedicoInputObjectZodSchema = makeSchema();
