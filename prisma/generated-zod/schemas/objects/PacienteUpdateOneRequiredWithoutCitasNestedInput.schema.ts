import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCreateWithoutCitasInputObjectSchema as PacienteCreateWithoutCitasInputObjectSchema } from './PacienteCreateWithoutCitasInput.schema';
import { PacienteUncheckedCreateWithoutCitasInputObjectSchema as PacienteUncheckedCreateWithoutCitasInputObjectSchema } from './PacienteUncheckedCreateWithoutCitasInput.schema';
import { PacienteCreateOrConnectWithoutCitasInputObjectSchema as PacienteCreateOrConnectWithoutCitasInputObjectSchema } from './PacienteCreateOrConnectWithoutCitasInput.schema';
import { PacienteUpsertWithoutCitasInputObjectSchema as PacienteUpsertWithoutCitasInputObjectSchema } from './PacienteUpsertWithoutCitasInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema';
import { PacienteUpdateToOneWithWhereWithoutCitasInputObjectSchema as PacienteUpdateToOneWithWhereWithoutCitasInputObjectSchema } from './PacienteUpdateToOneWithWhereWithoutCitasInput.schema';
import { PacienteUpdateWithoutCitasInputObjectSchema as PacienteUpdateWithoutCitasInputObjectSchema } from './PacienteUpdateWithoutCitasInput.schema';
import { PacienteUncheckedUpdateWithoutCitasInputObjectSchema as PacienteUncheckedUpdateWithoutCitasInputObjectSchema } from './PacienteUncheckedUpdateWithoutCitasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PacienteCreateWithoutCitasInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutCitasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PacienteCreateOrConnectWithoutCitasInputObjectSchema).optional(),
  upsert: z.lazy(() => PacienteUpsertWithoutCitasInputObjectSchema).optional(),
  connect: z.lazy(() => PacienteWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PacienteUpdateToOneWithWhereWithoutCitasInputObjectSchema), z.lazy(() => PacienteUpdateWithoutCitasInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutCitasInputObjectSchema)]).optional()
}).strict();
export const PacienteUpdateOneRequiredWithoutCitasNestedInputObjectSchema: z.ZodType<Prisma.PacienteUpdateOneRequiredWithoutCitasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpdateOneRequiredWithoutCitasNestedInput>;
export const PacienteUpdateOneRequiredWithoutCitasNestedInputObjectZodSchema = makeSchema();
