import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema';
import { PacienteUpdateWithoutCitasInputObjectSchema as PacienteUpdateWithoutCitasInputObjectSchema } from './PacienteUpdateWithoutCitasInput.schema';
import { PacienteUncheckedUpdateWithoutCitasInputObjectSchema as PacienteUncheckedUpdateWithoutCitasInputObjectSchema } from './PacienteUncheckedUpdateWithoutCitasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PacienteWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PacienteUpdateWithoutCitasInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutCitasInputObjectSchema)])
}).strict();
export const PacienteUpdateToOneWithWhereWithoutCitasInputObjectSchema: z.ZodType<Prisma.PacienteUpdateToOneWithWhereWithoutCitasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpdateToOneWithWhereWithoutCitasInput>;
export const PacienteUpdateToOneWithWhereWithoutCitasInputObjectZodSchema = makeSchema();
