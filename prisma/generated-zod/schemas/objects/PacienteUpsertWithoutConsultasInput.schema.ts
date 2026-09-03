import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteUpdateWithoutConsultasInputObjectSchema as PacienteUpdateWithoutConsultasInputObjectSchema } from './PacienteUpdateWithoutConsultasInput.schema';
import { PacienteUncheckedUpdateWithoutConsultasInputObjectSchema as PacienteUncheckedUpdateWithoutConsultasInputObjectSchema } from './PacienteUncheckedUpdateWithoutConsultasInput.schema';
import { PacienteCreateWithoutConsultasInputObjectSchema as PacienteCreateWithoutConsultasInputObjectSchema } from './PacienteCreateWithoutConsultasInput.schema';
import { PacienteUncheckedCreateWithoutConsultasInputObjectSchema as PacienteUncheckedCreateWithoutConsultasInputObjectSchema } from './PacienteUncheckedCreateWithoutConsultasInput.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PacienteUpdateWithoutConsultasInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutConsultasInputObjectSchema)]),
  create: z.union([z.lazy(() => PacienteCreateWithoutConsultasInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutConsultasInputObjectSchema)]),
  where: z.lazy(() => PacienteWhereInputObjectSchema).optional()
}).strict();
export const PacienteUpsertWithoutConsultasInputObjectSchema: z.ZodType<Prisma.PacienteUpsertWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpsertWithoutConsultasInput>;
export const PacienteUpsertWithoutConsultasInputObjectZodSchema = makeSchema();
