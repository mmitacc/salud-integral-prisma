import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutCitaInputObjectSchema as ConsultaUpdateWithoutCitaInputObjectSchema } from './ConsultaUpdateWithoutCitaInput.schema';
import { ConsultaUncheckedUpdateWithoutCitaInputObjectSchema as ConsultaUncheckedUpdateWithoutCitaInputObjectSchema } from './ConsultaUncheckedUpdateWithoutCitaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ConsultaUpdateWithoutCitaInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateWithoutCitaInputObjectSchema)])
}).strict();
export const ConsultaUpdateWithWhereUniqueWithoutCitaInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutCitaInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutCitaInput>;
export const ConsultaUpdateWithWhereUniqueWithoutCitaInputObjectZodSchema = makeSchema();
