import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  horario: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ConsultaUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateManyMutationInput>;
export const ConsultaUpdateManyMutationInputObjectZodSchema = makeSchema();
