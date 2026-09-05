import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateWithoutUsuarioInputObjectSchema as MedicoCreateWithoutUsuarioInputObjectSchema } from './MedicoCreateWithoutUsuarioInput.schema';
import { MedicoUncheckedCreateWithoutUsuarioInputObjectSchema as MedicoUncheckedCreateWithoutUsuarioInputObjectSchema } from './MedicoUncheckedCreateWithoutUsuarioInput.schema';
import { MedicoCreateOrConnectWithoutUsuarioInputObjectSchema as MedicoCreateOrConnectWithoutUsuarioInputObjectSchema } from './MedicoCreateOrConnectWithoutUsuarioInput.schema';
import { MedicoUpsertWithoutUsuarioInputObjectSchema as MedicoUpsertWithoutUsuarioInputObjectSchema } from './MedicoUpsertWithoutUsuarioInput.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema';
import { MedicoUpdateToOneWithWhereWithoutUsuarioInputObjectSchema as MedicoUpdateToOneWithWhereWithoutUsuarioInputObjectSchema } from './MedicoUpdateToOneWithWhereWithoutUsuarioInput.schema';
import { MedicoUpdateWithoutUsuarioInputObjectSchema as MedicoUpdateWithoutUsuarioInputObjectSchema } from './MedicoUpdateWithoutUsuarioInput.schema';
import { MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema as MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './MedicoUncheckedUpdateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutUsuarioInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicoCreateOrConnectWithoutUsuarioInputObjectSchema).optional(),
  upsert: z.lazy(() => MedicoUpsertWithoutUsuarioInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MedicoWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MedicoWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MedicoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MedicoUpdateToOneWithWhereWithoutUsuarioInputObjectSchema), z.lazy(() => MedicoUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema)]).optional()
}).strict();
export const MedicoUpdateOneWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.MedicoUpdateOneWithoutUsuarioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateOneWithoutUsuarioNestedInput>;
export const MedicoUpdateOneWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
