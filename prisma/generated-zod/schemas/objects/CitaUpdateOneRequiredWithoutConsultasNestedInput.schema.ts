import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaCreateWithoutConsultasInputObjectSchema as CitaCreateWithoutConsultasInputObjectSchema } from './CitaCreateWithoutConsultasInput.schema';
import { CitaUncheckedCreateWithoutConsultasInputObjectSchema as CitaUncheckedCreateWithoutConsultasInputObjectSchema } from './CitaUncheckedCreateWithoutConsultasInput.schema';
import { CitaCreateOrConnectWithoutConsultasInputObjectSchema as CitaCreateOrConnectWithoutConsultasInputObjectSchema } from './CitaCreateOrConnectWithoutConsultasInput.schema';
import { CitaUpsertWithoutConsultasInputObjectSchema as CitaUpsertWithoutConsultasInputObjectSchema } from './CitaUpsertWithoutConsultasInput.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './CitaWhereUniqueInput.schema';
import { CitaUpdateToOneWithWhereWithoutConsultasInputObjectSchema as CitaUpdateToOneWithWhereWithoutConsultasInputObjectSchema } from './CitaUpdateToOneWithWhereWithoutConsultasInput.schema';
import { CitaUpdateWithoutConsultasInputObjectSchema as CitaUpdateWithoutConsultasInputObjectSchema } from './CitaUpdateWithoutConsultasInput.schema';
import { CitaUncheckedUpdateWithoutConsultasInputObjectSchema as CitaUncheckedUpdateWithoutConsultasInputObjectSchema } from './CitaUncheckedUpdateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CitaCreateWithoutConsultasInputObjectSchema), z.lazy(() => CitaUncheckedCreateWithoutConsultasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CitaCreateOrConnectWithoutConsultasInputObjectSchema).optional(),
  upsert: z.lazy(() => CitaUpsertWithoutConsultasInputObjectSchema).optional(),
  connect: z.lazy(() => CitaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CitaUpdateToOneWithWhereWithoutConsultasInputObjectSchema), z.lazy(() => CitaUpdateWithoutConsultasInputObjectSchema), z.lazy(() => CitaUncheckedUpdateWithoutConsultasInputObjectSchema)]).optional()
}).strict();
export const CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema: z.ZodType<Prisma.CitaUpdateOneRequiredWithoutConsultasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateOneRequiredWithoutConsultasNestedInput>;
export const CitaUpdateOneRequiredWithoutConsultasNestedInputObjectZodSchema = makeSchema();
