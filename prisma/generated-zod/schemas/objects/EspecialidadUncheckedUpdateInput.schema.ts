import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MedicoUncheckedUpdateManyWithoutEspecialidadNestedInputObjectSchema as MedicoUncheckedUpdateManyWithoutEspecialidadNestedInputObjectSchema } from './MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  tipo: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  medicos: z.lazy(() => MedicoUncheckedUpdateManyWithoutEspecialidadNestedInputObjectSchema).optional()
}).strict();
export const EspecialidadUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.EspecialidadUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUncheckedUpdateInput>;
export const EspecialidadUncheckedUpdateInputObjectZodSchema = makeSchema();
