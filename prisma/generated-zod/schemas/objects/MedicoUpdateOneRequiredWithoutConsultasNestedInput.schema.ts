import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateWithoutConsultasInputObjectSchema as MedicoCreateWithoutConsultasInputObjectSchema } from './MedicoCreateWithoutConsultasInput.schema';
import { MedicoUncheckedCreateWithoutConsultasInputObjectSchema as MedicoUncheckedCreateWithoutConsultasInputObjectSchema } from './MedicoUncheckedCreateWithoutConsultasInput.schema';
import { MedicoCreateOrConnectWithoutConsultasInputObjectSchema as MedicoCreateOrConnectWithoutConsultasInputObjectSchema } from './MedicoCreateOrConnectWithoutConsultasInput.schema';
import { MedicoUpsertWithoutConsultasInputObjectSchema as MedicoUpsertWithoutConsultasInputObjectSchema } from './MedicoUpsertWithoutConsultasInput.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema';
import { MedicoUpdateToOneWithWhereWithoutConsultasInputObjectSchema as MedicoUpdateToOneWithWhereWithoutConsultasInputObjectSchema } from './MedicoUpdateToOneWithWhereWithoutConsultasInput.schema';
import { MedicoUpdateWithoutConsultasInputObjectSchema as MedicoUpdateWithoutConsultasInputObjectSchema } from './MedicoUpdateWithoutConsultasInput.schema';
import { MedicoUncheckedUpdateWithoutConsultasInputObjectSchema as MedicoUncheckedUpdateWithoutConsultasInputObjectSchema } from './MedicoUncheckedUpdateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicoCreateWithoutConsultasInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutConsultasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicoCreateOrConnectWithoutConsultasInputObjectSchema).optional(),
  upsert: z.lazy(() => MedicoUpsertWithoutConsultasInputObjectSchema).optional(),
  connect: z.lazy(() => MedicoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MedicoUpdateToOneWithWhereWithoutConsultasInputObjectSchema), z.lazy(() => MedicoUpdateWithoutConsultasInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateWithoutConsultasInputObjectSchema)]).optional()
}).strict();
export const MedicoUpdateOneRequiredWithoutConsultasNestedInputObjectSchema: z.ZodType<Prisma.MedicoUpdateOneRequiredWithoutConsultasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateOneRequiredWithoutConsultasNestedInput>;
export const MedicoUpdateOneRequiredWithoutConsultasNestedInputObjectZodSchema = makeSchema();
