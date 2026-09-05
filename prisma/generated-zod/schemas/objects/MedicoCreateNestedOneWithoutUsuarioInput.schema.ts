import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateWithoutUsuarioInputObjectSchema as MedicoCreateWithoutUsuarioInputObjectSchema } from './MedicoCreateWithoutUsuarioInput.schema';
import { MedicoUncheckedCreateWithoutUsuarioInputObjectSchema as MedicoUncheckedCreateWithoutUsuarioInputObjectSchema } from './MedicoUncheckedCreateWithoutUsuarioInput.schema';
import { MedicoCreateOrConnectWithoutUsuarioInputObjectSchema as MedicoCreateOrConnectWithoutUsuarioInputObjectSchema } from './MedicoCreateOrConnectWithoutUsuarioInput.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutUsuarioInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicoCreateOrConnectWithoutUsuarioInputObjectSchema).optional(),
  connect: z.lazy(() => MedicoWhereUniqueInputObjectSchema).optional()
}).strict();
export const MedicoCreateNestedOneWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.MedicoCreateNestedOneWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateNestedOneWithoutUsuarioInput>;
export const MedicoCreateNestedOneWithoutUsuarioInputObjectZodSchema = makeSchema();
