import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './EspecialidadWhereUniqueInput.schema';
import { EspecialidadCreateWithoutMedicosInputObjectSchema as EspecialidadCreateWithoutMedicosInputObjectSchema } from './EspecialidadCreateWithoutMedicosInput.schema';
import { EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema as EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema } from './EspecialidadUncheckedCreateWithoutMedicosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EspecialidadWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EspecialidadCreateWithoutMedicosInputObjectSchema), z.lazy(() => EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema)])
}).strict();
export const EspecialidadCreateOrConnectWithoutMedicosInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateOrConnectWithoutMedicosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateOrConnectWithoutMedicosInput>;
export const EspecialidadCreateOrConnectWithoutMedicosInputObjectZodSchema = makeSchema();
