import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema as CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema } from './CitaUpdateOneRequiredWithoutConsultasNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  horario: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cita: z.lazy(() => CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema).optional()
}).strict();
export const ConsultaUpdateWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateWithoutMedicoInput>;
export const ConsultaUpdateWithoutMedicoInputObjectZodSchema = makeSchema();
