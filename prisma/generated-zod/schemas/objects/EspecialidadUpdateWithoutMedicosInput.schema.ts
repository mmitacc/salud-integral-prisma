import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  tipo: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const EspecialidadUpdateWithoutMedicosInputObjectSchema: z.ZodType<Prisma.EspecialidadUpdateWithoutMedicosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpdateWithoutMedicosInput>;
export const EspecialidadUpdateWithoutMedicosInputObjectZodSchema = makeSchema();
