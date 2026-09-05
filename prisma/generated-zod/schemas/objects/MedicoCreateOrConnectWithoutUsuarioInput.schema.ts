import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema';
import { MedicoCreateWithoutUsuarioInputObjectSchema as MedicoCreateWithoutUsuarioInputObjectSchema } from './MedicoCreateWithoutUsuarioInput.schema';
import { MedicoUncheckedCreateWithoutUsuarioInputObjectSchema as MedicoUncheckedCreateWithoutUsuarioInputObjectSchema } from './MedicoUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const MedicoCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.MedicoCreateOrConnectWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateOrConnectWithoutUsuarioInput>;
export const MedicoCreateOrConnectWithoutUsuarioInputObjectZodSchema = makeSchema();
