import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema';
import { MedicoUpdateWithoutConsultasInputObjectSchema as MedicoUpdateWithoutConsultasInputObjectSchema } from './MedicoUpdateWithoutConsultasInput.schema';
import { MedicoUncheckedUpdateWithoutConsultasInputObjectSchema as MedicoUncheckedUpdateWithoutConsultasInputObjectSchema } from './MedicoUncheckedUpdateWithoutConsultasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MedicoUpdateWithoutConsultasInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateWithoutConsultasInputObjectSchema)])
}).strict();
export const MedicoUpdateToOneWithWhereWithoutConsultasInputObjectSchema: z.ZodType<Prisma.MedicoUpdateToOneWithWhereWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateToOneWithWhereWithoutConsultasInput>;
export const MedicoUpdateToOneWithWhereWithoutConsultasInputObjectZodSchema = makeSchema();
