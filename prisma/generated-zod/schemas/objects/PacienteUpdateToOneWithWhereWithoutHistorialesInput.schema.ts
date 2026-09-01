import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema';
import { PacienteUpdateWithoutHistorialesInputObjectSchema as PacienteUpdateWithoutHistorialesInputObjectSchema } from './PacienteUpdateWithoutHistorialesInput.schema';
import { PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema as PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema } from './PacienteUncheckedUpdateWithoutHistorialesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PacienteWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PacienteUpdateWithoutHistorialesInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema)])
}).strict();
export const PacienteUpdateToOneWithWhereWithoutHistorialesInputObjectSchema: z.ZodType<Prisma.PacienteUpdateToOneWithWhereWithoutHistorialesInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpdateToOneWithWhereWithoutHistorialesInput>;
export const PacienteUpdateToOneWithWhereWithoutHistorialesInputObjectZodSchema = makeSchema();
