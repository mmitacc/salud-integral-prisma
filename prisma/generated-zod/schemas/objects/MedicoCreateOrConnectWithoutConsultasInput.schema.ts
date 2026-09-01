import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema';
import { MedicoCreateWithoutConsultasInputObjectSchema as MedicoCreateWithoutConsultasInputObjectSchema } from './MedicoCreateWithoutConsultasInput.schema';
import { MedicoUncheckedCreateWithoutConsultasInputObjectSchema as MedicoUncheckedCreateWithoutConsultasInputObjectSchema } from './MedicoUncheckedCreateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicoCreateWithoutConsultasInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutConsultasInputObjectSchema)])
}).strict();
export const MedicoCreateOrConnectWithoutConsultasInputObjectSchema: z.ZodType<Prisma.MedicoCreateOrConnectWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateOrConnectWithoutConsultasInput>;
export const MedicoCreateOrConnectWithoutConsultasInputObjectZodSchema = makeSchema();
