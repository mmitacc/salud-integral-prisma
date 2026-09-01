import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema';
import { MedicoCreateWithoutEspecialidadInputObjectSchema as MedicoCreateWithoutEspecialidadInputObjectSchema } from './MedicoCreateWithoutEspecialidadInput.schema';
import { MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema as MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema } from './MedicoUncheckedCreateWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicoCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema)])
}).strict();
export const MedicoCreateOrConnectWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoCreateOrConnectWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateOrConnectWithoutEspecialidadInput>;
export const MedicoCreateOrConnectWithoutEspecialidadInputObjectZodSchema = makeSchema();
