import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema as CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema } from './CitaUpdateOneRequiredWithoutConsultasNestedInput.schema';
import { MedicoUpdateOneRequiredWithoutConsultasNestedInputObjectSchema as MedicoUpdateOneRequiredWithoutConsultasNestedInputObjectSchema } from './MedicoUpdateOneRequiredWithoutConsultasNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  horario: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cita: z.lazy(() => CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema).optional(),
  medico: z.lazy(() => MedicoUpdateOneRequiredWithoutConsultasNestedInputObjectSchema).optional()
}).strict();
export const ConsultaUpdateInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateInput>;
export const ConsultaUpdateInputObjectZodSchema = makeSchema();
