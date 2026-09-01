import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoScalarWhereInputObjectSchema as MedicoScalarWhereInputObjectSchema } from './MedicoScalarWhereInput.schema';
import { MedicoUpdateManyMutationInputObjectSchema as MedicoUpdateManyMutationInputObjectSchema } from './MedicoUpdateManyMutationInput.schema';
import { MedicoUncheckedUpdateManyWithoutEspecialidadInputObjectSchema as MedicoUncheckedUpdateManyWithoutEspecialidadInputObjectSchema } from './MedicoUncheckedUpdateManyWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MedicoUpdateManyMutationInputObjectSchema), z.lazy(() => MedicoUncheckedUpdateManyWithoutEspecialidadInputObjectSchema)])
}).strict();
export const MedicoUpdateManyWithWhereWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadInput>;
export const MedicoUpdateManyWithWhereWithoutEspecialidadInputObjectZodSchema = makeSchema();
