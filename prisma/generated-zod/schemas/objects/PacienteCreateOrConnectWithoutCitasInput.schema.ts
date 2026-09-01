import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema';
import { PacienteCreateWithoutCitasInputObjectSchema as PacienteCreateWithoutCitasInputObjectSchema } from './PacienteCreateWithoutCitasInput.schema';
import { PacienteUncheckedCreateWithoutCitasInputObjectSchema as PacienteUncheckedCreateWithoutCitasInputObjectSchema } from './PacienteUncheckedCreateWithoutCitasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PacienteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PacienteCreateWithoutCitasInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutCitasInputObjectSchema)])
}).strict();
export const PacienteCreateOrConnectWithoutCitasInputObjectSchema: z.ZodType<Prisma.PacienteCreateOrConnectWithoutCitasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateOrConnectWithoutCitasInput>;
export const PacienteCreateOrConnectWithoutCitasInputObjectZodSchema = makeSchema();
