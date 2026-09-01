import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoCreateWithoutConsultasInputObjectSchema as MedicoCreateWithoutConsultasInputObjectSchema } from './MedicoCreateWithoutConsultasInput.schema';
import { MedicoUncheckedCreateWithoutConsultasInputObjectSchema as MedicoUncheckedCreateWithoutConsultasInputObjectSchema } from './MedicoUncheckedCreateWithoutConsultasInput.schema';
import { MedicoCreateOrConnectWithoutConsultasInputObjectSchema as MedicoCreateOrConnectWithoutConsultasInputObjectSchema } from './MedicoCreateOrConnectWithoutConsultasInput.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicoCreateWithoutConsultasInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutConsultasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicoCreateOrConnectWithoutConsultasInputObjectSchema).optional(),
  connect: z.lazy(() => MedicoWhereUniqueInputObjectSchema).optional()
}).strict();
export const MedicoCreateNestedOneWithoutConsultasInputObjectSchema: z.ZodType<Prisma.MedicoCreateNestedOneWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateNestedOneWithoutConsultasInput>;
export const MedicoCreateNestedOneWithoutConsultasInputObjectZodSchema = makeSchema();
