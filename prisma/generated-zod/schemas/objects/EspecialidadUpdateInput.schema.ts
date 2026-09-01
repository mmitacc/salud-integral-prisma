import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MedicoUpdateManyWithoutEspecialidadNestedInputObjectSchema as MedicoUpdateManyWithoutEspecialidadNestedInputObjectSchema } from './MedicoUpdateManyWithoutEspecialidadNestedInput.schema'

const makeSchema = () => z.object({
  tipo: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  medicos: z.lazy(() => MedicoUpdateManyWithoutEspecialidadNestedInputObjectSchema).optional()
}).strict();
export const EspecialidadUpdateInputObjectSchema: z.ZodType<Prisma.EspecialidadUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpdateInput>;
export const EspecialidadUpdateInputObjectZodSchema = makeSchema();
