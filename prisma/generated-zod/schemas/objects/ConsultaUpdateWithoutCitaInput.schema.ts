import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MedicoUpdateOneRequiredWithoutConsultasNestedInputObjectSchema as MedicoUpdateOneRequiredWithoutConsultasNestedInputObjectSchema } from './MedicoUpdateOneRequiredWithoutConsultasNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  horario: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  medico: z.lazy(() => MedicoUpdateOneRequiredWithoutConsultasNestedInputObjectSchema).optional()
}).strict();
export const ConsultaUpdateWithoutCitaInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateWithoutCitaInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateWithoutCitaInput>;
export const ConsultaUpdateWithoutCitaInputObjectZodSchema = makeSchema();
