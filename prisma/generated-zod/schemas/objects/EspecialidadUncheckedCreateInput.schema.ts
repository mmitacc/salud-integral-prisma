import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoUncheckedCreateNestedManyWithoutEspecialidadInputObjectSchema as MedicoUncheckedCreateNestedManyWithoutEspecialidadInputObjectSchema } from './MedicoUncheckedCreateNestedManyWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  tipo: z.string().max(100),
  creado: z.coerce.date().optional(),
  medicos: z.lazy(() => MedicoUncheckedCreateNestedManyWithoutEspecialidadInputObjectSchema).optional()
}).strict();
export const EspecialidadUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EspecialidadUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUncheckedCreateInput>;
export const EspecialidadUncheckedCreateInputObjectZodSchema = makeSchema();
