import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './MedicoWhereUniqueInput.schema';
import { MedicoUpdateWithoutEspecialidadInputObjectSchema as MedicoUpdateWithoutEspecialidadInputObjectSchema } from './MedicoUpdateWithoutEspecialidadInput.schema';
import { MedicoUncheckedUpdateWithoutEspecialidadInputObjectSchema as MedicoUncheckedUpdateWithoutEspecialidadInputObjectSchema } from './MedicoUncheckedUpdateWithoutEspecialidadInput.schema';
import { MedicoCreateWithoutEspecialidadInputObjectSchema as MedicoCreateWithoutEspecialidadInputObjectSchema } from './MedicoCreateWithoutEspecialidadInput.schema';
import { MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema as MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema } from './MedicoUncheckedCreateWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MedicoUpdateWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateWithoutEspecialidadInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicoCreateWithoutEspecialidadInputObjectSchema), z.lazy(() => MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema)])
}).strict();
export const MedicoUpsertWithWhereUniqueWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadInput>;
export const MedicoUpsertWithWhereUniqueWithoutEspecialidadInputObjectZodSchema = makeSchema();
