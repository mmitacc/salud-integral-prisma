import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema';
import { MedicoUpdateWithoutEspecialidadInputObjectSchema as MedicoUpdateWithoutEspecialidadInputObjectSchema } from './MedicoUpdateWithoutEspecialidadInput.schema';
import { MedicoUncheckedUpdateWithoutEspecialidadInputObjectSchema as MedicoUncheckedUpdateWithoutEspecialidadInputObjectSchema } from './MedicoUncheckedUpdateWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MedicoUpdateWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateWithoutEspecialidadInputObjectSchema)])
}).strict();
export const MedicoUpdateWithWhereUniqueWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadInput>;
export const MedicoUpdateWithWhereUniqueWithoutEspecialidadInputObjectZodSchema = makeSchema();
