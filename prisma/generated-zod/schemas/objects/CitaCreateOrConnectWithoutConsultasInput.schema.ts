import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './CitaWhereUniqueInput.schema';
import { CitaCreateWithoutConsultasInputObjectSchema as CitaCreateWithoutConsultasInputObjectSchema } from './CitaCreateWithoutConsultasInput.schema';
import { CitaUncheckedCreateWithoutConsultasInputObjectSchema as CitaUncheckedCreateWithoutConsultasInputObjectSchema } from './CitaUncheckedCreateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CitaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CitaCreateWithoutConsultasInputObjectSchema), z.lazy(() => CitaUncheckedCreateWithoutConsultasInputObjectSchema)])
}).strict();
export const CitaCreateOrConnectWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaCreateOrConnectWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateOrConnectWithoutConsultasInput>;
export const CitaCreateOrConnectWithoutConsultasInputObjectZodSchema = makeSchema();
