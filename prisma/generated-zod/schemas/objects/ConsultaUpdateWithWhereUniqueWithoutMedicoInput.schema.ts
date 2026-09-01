import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutMedicoInputObjectSchema as ConsultaUpdateWithoutMedicoInputObjectSchema } from './ConsultaUpdateWithoutMedicoInput.schema';
import { ConsultaUncheckedUpdateWithoutMedicoInputObjectSchema as ConsultaUncheckedUpdateWithoutMedicoInputObjectSchema } from './ConsultaUncheckedUpdateWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ConsultaUpdateWithoutMedicoInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateWithoutMedicoInputObjectSchema)])
}).strict();
export const ConsultaUpdateWithWhereUniqueWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutMedicoInput>;
export const ConsultaUpdateWithWhereUniqueWithoutMedicoInputObjectZodSchema = makeSchema();
