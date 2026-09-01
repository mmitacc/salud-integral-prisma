import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteUpdateWithoutHistorialesInputObjectSchema as PacienteUpdateWithoutHistorialesInputObjectSchema } from './PacienteUpdateWithoutHistorialesInput.schema';
import { PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema as PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema } from './PacienteUncheckedUpdateWithoutHistorialesInput.schema';
import { PacienteCreateWithoutHistorialesInputObjectSchema as PacienteCreateWithoutHistorialesInputObjectSchema } from './PacienteCreateWithoutHistorialesInput.schema';
import { PacienteUncheckedCreateWithoutHistorialesInputObjectSchema as PacienteUncheckedCreateWithoutHistorialesInputObjectSchema } from './PacienteUncheckedCreateWithoutHistorialesInput.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PacienteUpdateWithoutHistorialesInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema)]),
  create: z.union([z.lazy(() => PacienteCreateWithoutHistorialesInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutHistorialesInputObjectSchema)]),
  where: z.lazy(() => PacienteWhereInputObjectSchema).optional()
}).strict();
export const PacienteUpsertWithoutHistorialesInputObjectSchema: z.ZodType<Prisma.PacienteUpsertWithoutHistorialesInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpsertWithoutHistorialesInput>;
export const PacienteUpsertWithoutHistorialesInputObjectZodSchema = makeSchema();
