import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCreateWithoutHistorialesInputObjectSchema as PacienteCreateWithoutHistorialesInputObjectSchema } from './PacienteCreateWithoutHistorialesInput.schema';
import { PacienteUncheckedCreateWithoutHistorialesInputObjectSchema as PacienteUncheckedCreateWithoutHistorialesInputObjectSchema } from './PacienteUncheckedCreateWithoutHistorialesInput.schema';
import { PacienteCreateOrConnectWithoutHistorialesInputObjectSchema as PacienteCreateOrConnectWithoutHistorialesInputObjectSchema } from './PacienteCreateOrConnectWithoutHistorialesInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PacienteCreateWithoutHistorialesInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutHistorialesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PacienteCreateOrConnectWithoutHistorialesInputObjectSchema).optional(),
  connect: z.lazy(() => PacienteWhereUniqueInputObjectSchema).optional()
}).strict();
export const PacienteCreateNestedOneWithoutHistorialesInputObjectSchema: z.ZodType<Prisma.PacienteCreateNestedOneWithoutHistorialesInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteCreateNestedOneWithoutHistorialesInput>;
export const PacienteCreateNestedOneWithoutHistorialesInputObjectZodSchema = makeSchema();
