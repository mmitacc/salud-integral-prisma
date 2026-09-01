import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaUpdateWithoutConsultasInputObjectSchema as CitaUpdateWithoutConsultasInputObjectSchema } from './CitaUpdateWithoutConsultasInput.schema';
import { CitaUncheckedUpdateWithoutConsultasInputObjectSchema as CitaUncheckedUpdateWithoutConsultasInputObjectSchema } from './CitaUncheckedUpdateWithoutConsultasInput.schema';
import { CitaCreateWithoutConsultasInputObjectSchema as CitaCreateWithoutConsultasInputObjectSchema } from './CitaCreateWithoutConsultasInput.schema';
import { CitaUncheckedCreateWithoutConsultasInputObjectSchema as CitaUncheckedCreateWithoutConsultasInputObjectSchema } from './CitaUncheckedCreateWithoutConsultasInput.schema';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './CitaWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CitaUpdateWithoutConsultasInputObjectSchema), z.lazy(() => CitaUncheckedUpdateWithoutConsultasInputObjectSchema)]),
  create: z.union([z.lazy(() => CitaCreateWithoutConsultasInputObjectSchema), z.lazy(() => CitaUncheckedCreateWithoutConsultasInputObjectSchema)]),
  where: z.lazy(() => CitaWhereInputObjectSchema).optional()
}).strict();
export const CitaUpsertWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaUpsertWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpsertWithoutConsultasInput>;
export const CitaUpsertWithoutConsultasInputObjectZodSchema = makeSchema();
