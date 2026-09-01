import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadUpdateWithoutMedicosInputObjectSchema as EspecialidadUpdateWithoutMedicosInputObjectSchema } from './EspecialidadUpdateWithoutMedicosInput.schema';
import { EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema as EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema } from './EspecialidadUncheckedUpdateWithoutMedicosInput.schema';
import { EspecialidadCreateWithoutMedicosInputObjectSchema as EspecialidadCreateWithoutMedicosInputObjectSchema } from './EspecialidadCreateWithoutMedicosInput.schema';
import { EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema as EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema } from './EspecialidadUncheckedCreateWithoutMedicosInput.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EspecialidadUpdateWithoutMedicosInputObjectSchema), z.lazy(() => EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema)]),
  create: z.union([z.lazy(() => EspecialidadCreateWithoutMedicosInputObjectSchema), z.lazy(() => EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema)]),
  where: z.lazy(() => EspecialidadWhereInputObjectSchema).optional()
}).strict();
export const EspecialidadUpsertWithoutMedicosInputObjectSchema: z.ZodType<Prisma.EspecialidadUpsertWithoutMedicosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpsertWithoutMedicosInput>;
export const EspecialidadUpsertWithoutMedicosInputObjectZodSchema = makeSchema();
