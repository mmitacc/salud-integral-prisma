import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { PacienteCreateWithoutHistorialesInputObjectSchema as PacienteCreateWithoutHistorialesInputObjectSchema } from './PacienteCreateWithoutHistorialesInput.schema';
import { PacienteUncheckedCreateWithoutHistorialesInputObjectSchema as PacienteUncheckedCreateWithoutHistorialesInputObjectSchema } from './PacienteUncheckedCreateWithoutHistorialesInput.schema';
import { PacienteCreateOrConnectWithoutHistorialesInputObjectSchema as PacienteCreateOrConnectWithoutHistorialesInputObjectSchema } from './PacienteCreateOrConnectWithoutHistorialesInput.schema';
import { PacienteUpsertWithoutHistorialesInputObjectSchema as PacienteUpsertWithoutHistorialesInputObjectSchema } from './PacienteUpsertWithoutHistorialesInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './PacienteWhereUniqueInput.schema';
import { PacienteUpdateToOneWithWhereWithoutHistorialesInputObjectSchema as PacienteUpdateToOneWithWhereWithoutHistorialesInputObjectSchema } from './PacienteUpdateToOneWithWhereWithoutHistorialesInput.schema';
import { PacienteUpdateWithoutHistorialesInputObjectSchema as PacienteUpdateWithoutHistorialesInputObjectSchema } from './PacienteUpdateWithoutHistorialesInput.schema';
import { PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema as PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema } from './PacienteUncheckedUpdateWithoutHistorialesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PacienteCreateWithoutHistorialesInputObjectSchema), z.lazy(() => PacienteUncheckedCreateWithoutHistorialesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PacienteCreateOrConnectWithoutHistorialesInputObjectSchema).optional(),
  upsert: z.lazy(() => PacienteUpsertWithoutHistorialesInputObjectSchema).optional(),
  connect: z.lazy(() => PacienteWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PacienteUpdateToOneWithWhereWithoutHistorialesInputObjectSchema), z.lazy(() => PacienteUpdateWithoutHistorialesInputObjectSchema), z.lazy(() => PacienteUncheckedUpdateWithoutHistorialesInputObjectSchema)]).optional()
}).strict();
export const PacienteUpdateOneRequiredWithoutHistorialesNestedInputObjectSchema: z.ZodType<Prisma.PacienteUpdateOneRequiredWithoutHistorialesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpdateOneRequiredWithoutHistorialesNestedInput>;
export const PacienteUpdateOneRequiredWithoutHistorialesNestedInputObjectZodSchema = makeSchema();
