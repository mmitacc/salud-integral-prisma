import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadCreateWithoutMedicosInputObjectSchema as EspecialidadCreateWithoutMedicosInputObjectSchema } from './EspecialidadCreateWithoutMedicosInput.schema';
import { EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema as EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema } from './EspecialidadUncheckedCreateWithoutMedicosInput.schema';
import { EspecialidadCreateOrConnectWithoutMedicosInputObjectSchema as EspecialidadCreateOrConnectWithoutMedicosInputObjectSchema } from './EspecialidadCreateOrConnectWithoutMedicosInput.schema';
import { EspecialidadUpsertWithoutMedicosInputObjectSchema as EspecialidadUpsertWithoutMedicosInputObjectSchema } from './EspecialidadUpsertWithoutMedicosInput.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './EspecialidadWhereUniqueInput.schema';
import { EspecialidadUpdateToOneWithWhereWithoutMedicosInputObjectSchema as EspecialidadUpdateToOneWithWhereWithoutMedicosInputObjectSchema } from './EspecialidadUpdateToOneWithWhereWithoutMedicosInput.schema';
import { EspecialidadUpdateWithoutMedicosInputObjectSchema as EspecialidadUpdateWithoutMedicosInputObjectSchema } from './EspecialidadUpdateWithoutMedicosInput.schema';
import { EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema as EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema } from './EspecialidadUncheckedUpdateWithoutMedicosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EspecialidadCreateWithoutMedicosInputObjectSchema), z.lazy(() => EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EspecialidadCreateOrConnectWithoutMedicosInputObjectSchema).optional(),
  upsert: z.lazy(() => EspecialidadUpsertWithoutMedicosInputObjectSchema).optional(),
  connect: z.lazy(() => EspecialidadWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EspecialidadUpdateToOneWithWhereWithoutMedicosInputObjectSchema), z.lazy(() => EspecialidadUpdateWithoutMedicosInputObjectSchema), z.lazy(() => EspecialidadUncheckedUpdateWithoutMedicosInputObjectSchema)]).optional()
}).strict();
export const EspecialidadUpdateOneRequiredWithoutMedicosNestedInputObjectSchema: z.ZodType<Prisma.EspecialidadUpdateOneRequiredWithoutMedicosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpdateOneRequiredWithoutMedicosNestedInput>;
export const EspecialidadUpdateOneRequiredWithoutMedicosNestedInputObjectZodSchema = makeSchema();
