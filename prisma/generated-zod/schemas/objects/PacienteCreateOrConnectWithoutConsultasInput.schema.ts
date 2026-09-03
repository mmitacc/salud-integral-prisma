import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema';
import { PacienteCreateWithoutConsultasInputObjectSchema as PacienteCreateWithoutConsultasInputObjectSchema } from './PacienteCreateWithoutConsultasInput.schema';
import { PacienteUncheckedCreateWithoutConsultasInputObjectSchema as PacienteUncheckedCreateWithoutConsultasInputObjectSchema } from './PacienteUncheckedCreateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PacienteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PacienteCreateWithoutConsultasInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutConsultasInputObjectSchema)])
}).strict();
export const PacienteCreateOrConnectWithoutConsultasInputObjectSchema: z.ZodType<Prisma.PacienteCreateOrConnectWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateOrConnectWithoutConsultasInput>;
export const PacienteCreateOrConnectWithoutConsultasInputObjectZodSchema = makeSchema();
