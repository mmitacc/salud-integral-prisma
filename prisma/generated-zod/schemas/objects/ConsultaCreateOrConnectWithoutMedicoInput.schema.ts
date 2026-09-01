import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaCreateWithoutMedicoInputObjectSchema as ConsultaCreateWithoutMedicoInputObjectSchema } from './ConsultaCreateWithoutMedicoInput.schema';
import { ConsultaUncheckedCreateWithoutMedicoInputObjectSchema as ConsultaUncheckedCreateWithoutMedicoInputObjectSchema } from './ConsultaUncheckedCreateWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConsultaCreateWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUncheckedCreateWithoutMedicoInputObjectSchema)])
}).strict();
export const ConsultaCreateOrConnectWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaCreateOrConnectWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateOrConnectWithoutMedicoInput>;
export const ConsultaCreateOrConnectWithoutMedicoInputObjectZodSchema = makeSchema();
