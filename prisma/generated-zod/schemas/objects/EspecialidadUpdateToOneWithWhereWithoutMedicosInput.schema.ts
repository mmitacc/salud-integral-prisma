import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema';
import { EspecialidadUpdateWithoutMedicosInputObjectSchema as EspecialidadUpdateWithoutMedicosInputObjectSchema } from './EspecialidadUpdateWithoutMedicosInput.schema';
import { EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema as EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema } from './EspecialidadUncheckedUpdateWithoutMedicosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EspecialidadWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EspecialidadUpdateWithoutMedicosInputObjectSchema), z.lazy(() => EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema)])
}).strict();
export const EspecialidadUpdateToOneWithWhereWithoutMedicosInputObjectSchema: z.ZodType<Prisma.EspecialidadUpdateToOneWithWhereWithoutMedicosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpdateToOneWithWhereWithoutMedicosInput>;
export const EspecialidadUpdateToOneWithWhereWithoutMedicosInputObjectZodSchema = makeSchema();
