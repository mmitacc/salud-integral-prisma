import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoUpdateWithoutUsuarioInputObjectSchema as MedicoUpdateWithoutUsuarioInputObjectSchema } from './MedicoUpdateWithoutUsuarioInput.schema';
import { MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema as MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './MedicoUncheckedUpdateWithoutUsuarioInput.schema';
import { MedicoCreateWithoutUsuarioInputObjectSchema as MedicoCreateWithoutUsuarioInputObjectSchema } from './MedicoCreateWithoutUsuarioInput.schema';
import { MedicoUncheckedCreateWithoutUsuarioInputObjectSchema as MedicoUncheckedCreateWithoutUsuarioInputObjectSchema } from './MedicoUncheckedCreateWithoutUsuarioInput.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MedicoUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutUsuarioInputObjectSchema)]),
  where: z.lazy(() => MedicoWhereInputObjectSchema).optional()
}).strict();
export const MedicoUpsertWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.MedicoUpsertWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpsertWithoutUsuarioInput>;
export const MedicoUpsertWithoutUsuarioInputObjectZodSchema = makeSchema();
