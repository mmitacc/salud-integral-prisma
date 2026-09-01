import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadCreateWithoutMedicosInputObjectSchema as EspecialidadCreateWithoutMedicosInputObjectSchema } from './EspecialidadCreateWithoutMedicosInput.schema';
import { EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema as EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema } from './EspecialidadUncheckedCreateWithoutMedicosInput.schema';
import { EspecialidadCreateOrConnectWithoutMedicosInputObjectSchema as EspecialidadCreateOrConnectWithoutMedicosInputObjectSchema } from './EspecialidadCreateOrConnectWithoutMedicosInput.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './EspecialidadWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EspecialidadCreateWithoutMedicosInputObjectSchema), z.lazy(() => EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EspecialidadCreateOrConnectWithoutMedicosInputObjectSchema).optional(),
  connect: z.lazy(() => EspecialidadWhereUniqueInputObjectSchema).optional()
}).strict();
export const EspecialidadCreateNestedOneWithoutMedicosInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateNestedOneWithoutMedicosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateNestedOneWithoutMedicosInput>;
export const EspecialidadCreateNestedOneWithoutMedicosInputObjectZodSchema = makeSchema();
