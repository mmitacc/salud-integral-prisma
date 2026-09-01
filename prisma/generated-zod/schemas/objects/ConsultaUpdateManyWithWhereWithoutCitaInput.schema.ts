import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaScalarWhereInputObjectSchema as ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema';
import { ConsultaUpdateManyMutationInputObjectSchema as ConsultaUpdateManyMutationInputObjectSchema } from './ConsultaUpdateManyMutationInput.schema';
import { ConsultaUncheckedUpdateManyWithoutCitaInputObjectSchema as ConsultaUncheckedUpdateManyWithoutCitaInputObjectSchema } from './ConsultaUncheckedUpdateManyWithoutCitaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ConsultaUpdateManyMutationInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateManyWithoutCitaInputObjectSchema)])
}).strict();
export const ConsultaUpdateManyWithWhereWithoutCitaInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutCitaInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutCitaInput>;
export const ConsultaUpdateManyWithWhereWithoutCitaInputObjectZodSchema = makeSchema();
