import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaCreateWithoutConsultasInputObjectSchema as CitaCreateWithoutConsultasInputObjectSchema } from './CitaCreateWithoutConsultasInput.schema';
import { CitaUncheckedCreateWithoutConsultasInputObjectSchema as CitaUncheckedCreateWithoutConsultasInputObjectSchema } from './CitaUncheckedCreateWithoutConsultasInput.schema';
import { CitaCreateOrConnectWithoutConsultasInputObjectSchema as CitaCreateOrConnectWithoutConsultasInputObjectSchema } from './CitaCreateOrConnectWithoutConsultasInput.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './CitaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CitaCreateWithoutConsultasInputObjectSchema), z.lazy(() => CitaUncheckedCreateWithoutConsultasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CitaCreateOrConnectWithoutConsultasInputObjectSchema).optional(),
  connect: z.lazy(() => CitaWhereUniqueInputObjectSchema).optional()
}).strict();
export const CitaCreateNestedOneWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaCreateNestedOneWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateNestedOneWithoutConsultasInput>;
export const CitaCreateNestedOneWithoutConsultasInputObjectZodSchema = makeSchema();
