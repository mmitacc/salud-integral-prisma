import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  tipo: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const EspecialidadUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.EspecialidadUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUncheckedUpdateManyInput>;
export const EspecialidadUncheckedUpdateManyInputObjectZodSchema = makeSchema();
