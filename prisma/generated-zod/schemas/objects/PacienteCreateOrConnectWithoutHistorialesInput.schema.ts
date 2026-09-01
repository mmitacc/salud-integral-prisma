import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema';
import { PacienteCreateWithoutHistorialesInputObjectSchema as PacienteCreateWithoutHistorialesInputObjectSchema } from './PacienteCreateWithoutHistorialesInput.schema';
import { PacienteUncheckedCreateWithoutHistorialesInputObjectSchema as PacienteUncheckedCreateWithoutHistorialesInputObjectSchema } from './PacienteUncheckedCreateWithoutHistorialesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PacienteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PacienteCreateWithoutHistorialesInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutHistorialesInputObjectSchema)])
}).strict();
export const PacienteCreateOrConnectWithoutHistorialesInputObjectSchema: z.ZodType<Prisma.PacienteCreateOrConnectWithoutHistorialesInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateOrConnectWithoutHistorialesInput>;
export const PacienteCreateOrConnectWithoutHistorialesInputObjectZodSchema = makeSchema();
