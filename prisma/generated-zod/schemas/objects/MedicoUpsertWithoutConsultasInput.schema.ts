import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoUpdateWithoutConsultasInputObjectSchema as MedicoUpdateWithoutConsultasInputObjectSchema } from './MedicoUpdateWithoutConsultasInput.schema';
import { MedicoUncheckedUpdateWithoutConsultasInputObjectSchema as MedicoUncheckedUpdateWithoutConsultasInputObjectSchema } from './MedicoUncheckedUpdateWithoutConsultasInput.schema';
import { MedicoCreateWithoutConsultasInputObjectSchema as MedicoCreateWithoutConsultasInputObjectSchema } from './MedicoCreateWithoutConsultasInput.schema';
import { MedicoUncheckedCreateWithoutConsultasInputObjectSchema as MedicoUncheckedCreateWithoutConsultasInputObjectSchema } from './MedicoUncheckedCreateWithoutConsultasInput.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MedicoUpdateWithoutConsultasInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateWithoutConsultasInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicoCreateWithoutConsultasInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutConsultasInputObjectSchema)]),
  where: z.lazy(() => MedicoWhereInputObjectSchema).optional()
}).strict();
export const MedicoUpsertWithoutConsultasInputObjectSchema: z.ZodType<Prisma.MedicoUpsertWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpsertWithoutConsultasInput>;
export const MedicoUpsertWithoutConsultasInputObjectZodSchema = makeSchema();
