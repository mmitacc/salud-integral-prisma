import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaScalarWhereInputObjectSchema as ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema';
import { ConsultaUpdateManyMutationInputObjectSchema as ConsultaUpdateManyMutationInputObjectSchema } from './ConsultaUpdateManyMutationInput.schema';
import { ConsultaUncheckedUpdateManyWithoutUsuarioInputObjectSchema as ConsultaUncheckedUpdateManyWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedUpdateManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ConsultaUpdateManyMutationInputObjectSchema), z.lazy(() => ConsultaUncheckedUpdateManyWithoutUsuarioInputObjectSchema)])
}).strict();
export const ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutUsuarioInput>;
export const ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectZodSchema = makeSchema();
