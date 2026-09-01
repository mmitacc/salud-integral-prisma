import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCreateWithoutCitasInputObjectSchema as PacienteCreateWithoutCitasInputObjectSchema } from './PacienteCreateWithoutCitasInput.schema';
import { PacienteUncheckedCreateWithoutCitasInputObjectSchema as PacienteUncheckedCreateWithoutCitasInputObjectSchema } from './PacienteUncheckedCreateWithoutCitasInput.schema';
import { PacienteCreateOrConnectWithoutCitasInputObjectSchema as PacienteCreateOrConnectWithoutCitasInputObjectSchema } from './PacienteCreateOrConnectWithoutCitasInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PacienteCreateWithoutCitasInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutCitasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PacienteCreateOrConnectWithoutCitasInputObjectSchema).optional(),
  connect: z.lazy(() => PacienteWhereUniqueInputObjectSchema).optional()
}).strict();
export const PacienteCreateNestedOneWithoutCitasInputObjectSchema: z.ZodType<Prisma.PacienteCreateNestedOneWithoutCitasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateNestedOneWithoutCitasInput>;
export const PacienteCreateNestedOneWithoutCitasInputObjectZodSchema = makeSchema();
