import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema';
import { MedicoUpdateWithoutUsuarioInputObjectSchema as MedicoUpdateWithoutUsuarioInputObjectSchema } from './MedicoUpdateWithoutUsuarioInput.schema';
import { MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema as MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './MedicoUncheckedUpdateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MedicoUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateWithoutUsuarioInputObjectSchema)])
}).strict();
export const MedicoUpdateToOneWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.MedicoUpdateToOneWithWhereWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateToOneWithWhereWithoutUsuarioInput>;
export const MedicoUpdateToOneWithWhereWithoutUsuarioInputObjectZodSchema = makeSchema();
