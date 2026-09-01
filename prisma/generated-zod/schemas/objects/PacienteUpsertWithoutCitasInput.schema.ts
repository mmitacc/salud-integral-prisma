import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteUpdateWithoutCitasInputObjectSchema as PacienteUpdateWithoutCitasInputObjectSchema } from './PacienteUpdateWithoutCitasInput.schema';
import { PacienteUncheckedUpdateWithoutCitasInputObjectSchema as PacienteUncheckedUpdateWithoutCitasInputObjectSchema } from './PacienteUncheckedUpdateWithoutCitasInput.schema';
import { PacienteCreateWithoutCitasInputObjectSchema as PacienteCreateWithoutCitasInputObjectSchema } from './PacienteCreateWithoutCitasInput.schema';
import { PacienteUncheckedCreateWithoutCitasInputObjectSchema as PacienteUncheckedCreateWithoutCitasInputObjectSchema } from './PacienteUncheckedCreateWithoutCitasInput.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PacienteUpdateWithoutCitasInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutCitasInputObjectSchema)]),
  create: z.union([z.lazy(() => PacienteCreateWithoutCitasInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutCitasInputObjectSchema)]),
  where: z.lazy(() => PacienteWhereInputObjectSchema).optional()
}).strict();
export const PacienteUpsertWithoutCitasInputObjectSchema: z.ZodType<Prisma.PacienteUpsertWithoutCitasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpsertWithoutCitasInput>;
export const PacienteUpsertWithoutCitasInputObjectZodSchema = makeSchema();
