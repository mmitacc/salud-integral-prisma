import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaScalarWhereInputObjectSchema as ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema';
import { ConsultaUpdateManyMutationInputObjectSchema as ConsultaUpdateManyMutationInputObjectSchema } from './ConsultaUpdateManyMutationInput.schema';
import { ConsultaUncheckedUpdateManyWithoutMedicoInputObjectSchema as ConsultaUncheckedUpdateManyWithoutMedicoInputObjectSchema } from './ConsultaUncheckedUpdateManyWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ConsultaUpdateManyMutationInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateManyWithoutMedicoInputObjectSchema)])
}).strict();
export const ConsultaUpdateManyWithWhereWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutMedicoInput>;
export const ConsultaUpdateManyWithWhereWithoutMedicoInputObjectZodSchema = makeSchema();
