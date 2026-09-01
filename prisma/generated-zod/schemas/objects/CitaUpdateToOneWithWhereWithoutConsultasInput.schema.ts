import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './CitaWhereInput.schema';
import { CitaUpdateWithoutConsultasInputObjectSchema as CitaUpdateWithoutConsultasInputObjectSchema } from './CitaUpdateWithoutConsultasInput.schema';
import { CitaUncheckedUpdateWithoutConsultasInputObjectSchema as CitaUncheckedUpdateWithoutConsultasInputObjectSchema } from './CitaUncheckedUpdateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CitaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CitaUpdateWithoutConsultasInputObjectSchema), z.lazy(() => CitaUncheckedUpdateWithoutConsultasInputObjectSchema)])
}).strict();
export const CitaUpdateToOneWithWhereWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaUpdateToOneWithWhereWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateToOneWithWhereWithoutConsultasInput>;
export const CitaUpdateToOneWithWhereWithoutConsultasInputObjectZodSchema = makeSchema();
