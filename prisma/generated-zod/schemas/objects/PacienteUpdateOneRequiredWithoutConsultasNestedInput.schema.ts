import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCreateWithoutConsultasInputObjectSchema as PacienteCreateWithoutConsultasInputObjectSchema } from './PacienteCreateWithoutConsultasInput.schema';
import { PacienteUncheckedCreateWithoutConsultasInputObjectSchema as PacienteUncheckedCreateWithoutConsultasInputObjectSchema } from './PacienteUncheckedCreateWithoutConsultasInput.schema';
import { PacienteCreateOrConnectWithoutConsultasInputObjectSchema as PacienteCreateOrConnectWithoutConsultasInputObjectSchema } from './PacienteCreateOrConnectWithoutConsultasInput.schema';
import { PacienteUpsertWithoutConsultasInputObjectSchema as PacienteUpsertWithoutConsultasInputObjectSchema } from './PacienteUpsertWithoutConsultasInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema';
import { PacienteUpdateToOneWithWhereWithoutConsultasInputObjectSchema as PacienteUpdateToOneWithWhereWithoutConsultasInputObjectSchema } from './PacienteUpdateToOneWithWhereWithoutConsultasInput.schema';
import { PacienteUpdateWithoutConsultasInputObjectSchema as PacienteUpdateWithoutConsultasInputObjectSchema } from './PacienteUpdateWithoutConsultasInput.schema';
import { PacienteUncheckedUpdateWithoutConsultasInputObjectSchema as PacienteUncheckedUpdateWithoutConsultasInputObjectSchema } from './PacienteUncheckedUpdateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PacienteCreateWithoutConsultasInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutConsultasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PacienteCreateOrConnectWithoutConsultasInputObjectSchema).optional(),
  upsert: z.lazy(() => PacienteUpsertWithoutConsultasInputObjectSchema).optional(),
  connect: z.lazy(() => PacienteWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PacienteUpdateToOneWithWhereWithoutConsultasInputObjectSchema), z.lazy(() => PacienteUpdateWithoutConsultasInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutConsultasInputObjectSchema)]).optional()
}).strict();
export const PacienteUpdateOneRequiredWithoutConsultasNestedInputObjectSchema: z.ZodType<Prisma.PacienteUpdateOneRequiredWithoutConsultasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpdateOneRequiredWithoutConsultasNestedInput>;
export const PacienteUpdateOneRequiredWithoutConsultasNestedInputObjectZodSchema = makeSchema();
