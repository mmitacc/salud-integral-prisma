import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema';
import { PacienteUpdateWithoutConsultasInputObjectSchema as PacienteUpdateWithoutConsultasInputObjectSchema } from './PacienteUpdateWithoutConsultasInput.schema';
import { PacienteUncheckedUpdateWithoutConsultasInputObjectSchema as PacienteUncheckedUpdateWithoutConsultasInputObjectSchema } from './PacienteUncheckedUpdateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PacienteWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PacienteUpdateWithoutConsultasInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutConsultasInputObjectSchema)])
}).strict();
export const PacienteUpdateToOneWithWhereWithoutConsultasInputObjectSchema: z.ZodType<Prisma.PacienteUpdateToOneWithWhereWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpdateToOneWithWhereWithoutConsultasInput>;
export const PacienteUpdateToOneWithWhereWithoutConsultasInputObjectZodSchema = makeSchema();
