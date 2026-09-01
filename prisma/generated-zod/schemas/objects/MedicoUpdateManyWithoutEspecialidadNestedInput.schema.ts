import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateWithoutEspecialidadInputObjectSchema as MedicoCreateWithoutEspecialidadInputObjectSchema } from './MedicoCreateWithoutEspecialidadInput.schema';
import { MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema as MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema } from './MedicoUncheckedCreateWithoutEspecialidadInput.schema';
import { MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema as MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema } from './MedicoCreateOrConnectWithoutEspecialidadInput.schema';
import { MedicoUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema as MedicoUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema } from './MedicoUpsertWithWhereUniqueWithoutEspecialidadInput.schema';
import { MedicoCreateManyEspecialidadInputEnvelopeObjectSchema as MedicoCreateManyEspecialidadInputEnvelopeObjectSchema } from './MedicoCreateManyEspecialidadInputEnvelope.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema';
import { MedicoUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema as MedicoUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema } from './MedicoUpdateWithWhereUniqueWithoutEspecialidadInput.schema';
import { MedicoUpdateManyWithWhereWithoutEspecialidadInputObjectSchema as MedicoUpdateManyWithWhereWithoutEspecialidadInputObjectSchema } from './MedicoUpdateManyWithWhereWithoutEspecialidadInput.schema';
import { MedicoScalarWhereInputObjectSchema as MedicoScalarWhereInputObjectSchema } from './MedicoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicoCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoCreateWithoutEspecialidadInputObjectSchema).array(), z.lazy(() => MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MedicoUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MedicoCreateManyEspecialidadInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MedicoWhereUniqueInputObjectSchema), z.lazy(() => MedicoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MedicoWhereUniqueInputObjectSchema), z.lazy(() => MedicoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MedicoWhereUniqueInputObjectSchema), z.lazy(() => MedicoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MedicoWhereUniqueInputObjectSchema), z.lazy(() => MedicoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MedicoUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MedicoUpdateManyWithWhereWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUpdateManyWithWhereWithoutEspecialidadInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MedicoScalarWhereInputObjectSchema), z.lazy(() => MedicoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MedicoUpdateManyWithoutEspecialidadNestedInputObjectSchema: z.ZodType<Prisma.MedicoUpdateManyWithoutEspecialidadNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateManyWithoutEspecialidadNestedInput>;
export const MedicoUpdateManyWithoutEspecialidadNestedInputObjectZodSchema = makeSchema();
