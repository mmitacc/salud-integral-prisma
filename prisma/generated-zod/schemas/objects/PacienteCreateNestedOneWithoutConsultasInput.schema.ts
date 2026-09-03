import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCreateWithoutConsultasInputObjectSchema as PacienteCreateWithoutConsultasInputObjectSchema } from './PacienteCreateWithoutConsultasInput.schema';
import { PacienteUncheckedCreateWithoutConsultasInputObjectSchema as PacienteUncheckedCreateWithoutConsultasInputObjectSchema } from './PacienteUncheckedCreateWithoutConsultasInput.schema';
import { PacienteCreateOrConnectWithoutConsultasInputObjectSchema as PacienteCreateOrConnectWithoutConsultasInputObjectSchema } from './PacienteCreateOrConnectWithoutConsultasInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PacienteCreateWithoutConsultasInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutConsultasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PacienteCreateOrConnectWithoutConsultasInputObjectSchema).optional(),
  connect: z.lazy(() => PacienteWhereUniqueInputObjectSchema).optional()
}).strict();
export const PacienteCreateNestedOneWithoutConsultasInputObjectSchema: z.ZodType<Prisma.PacienteCreateNestedOneWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateNestedOneWithoutConsultasInput>;
export const PacienteCreateNestedOneWithoutConsultasInputObjectZodSchema = makeSchema();
