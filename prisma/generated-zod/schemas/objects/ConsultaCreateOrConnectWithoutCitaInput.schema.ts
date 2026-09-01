import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaCreateWithoutCitaInputObjectSchema as ConsultaCreateWithoutCitaInputObjectSchema } from './ConsultaCreateWithoutCitaInput.schema';
import { ConsultaUncheckedCreateWithoutCitaInputObjectSchema as ConsultaUncheckedCreateWithoutCitaInputObjectSchema } from './ConsultaUncheckedCreateWithoutCitaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConsultaCreateWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutCitaInputObjectSchema)])
}).strict();
export const ConsultaCreateOrConnectWithoutCitaInputObjectSchema: z.ZodType<Prisma.ConsultaCreateOrConnectWithoutCitaInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateOrConnectWithoutCitaInput>;
export const ConsultaCreateOrConnectWithoutCitaInputObjectZodSchema = makeSchema();
