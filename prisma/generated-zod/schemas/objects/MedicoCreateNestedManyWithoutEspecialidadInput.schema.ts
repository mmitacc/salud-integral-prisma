import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateWithoutEspecialidadInputObjectSchema as MedicoCreateWithoutEspecialidadInputObjectSchema } from './MedicoCreateWithoutEspecialidadInput.schema';
import { MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema as MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema } from './MedicoUncheckedCreateWithoutEspecialidadInput.schema';
import { MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema as MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema } from './MedicoCreateOrConnectWithoutEspecialidadInput.schema';
import { MedicoCreateManyEspecialidadInputEnvelopeObjectSchema as MedicoCreateManyEspecialidadInputEnvelopeObjectSchema } from './MedicoCreateManyEspecialidadInputEnvelope.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicoCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoCreateWithoutEspecialidadInputObjectSchema).array(), z.lazy(() => MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MedicoCreateManyEspecialidadInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MedicoWhereUniqueInputObjectSchema), z.lazy(() => MedicoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MedicoCreateNestedManyWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoCreateNestedManyWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateNestedManyWithoutEspecialidadInput>;
export const MedicoCreateNestedManyWithoutEspecialidadInputObjectZodSchema = makeSchema();
