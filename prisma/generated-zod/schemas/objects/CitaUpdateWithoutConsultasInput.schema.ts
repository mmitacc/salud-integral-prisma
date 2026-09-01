import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { EnumEstadoCitaFieldUpdateOperationsInputObjectSchema as EnumEstadoCitaFieldUpdateOperationsInputObjectSchema } from './EnumEstadoCitaFieldUpdateOperationsInput.schema';
import { PacienteUpdateOneRequiredWithoutCitasNestedInputObjectSchema as PacienteUpdateOneRequiredWithoutCitasNestedInputObjectSchema } from './PacienteUpdateOneRequiredWithoutCitasNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([EstadoCitaSchema, z.lazy(() => EnumEstadoCitaFieldUpdateOperationsInputObjectSchema)]).optional(),
  paciente: z.lazy(() => PacienteUpdateOneRequiredWithoutCitasNestedInputObjectSchema).optional()
}).strict();
export const CitaUpdateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaUpdateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateWithoutConsultasInput>;
export const CitaUpdateWithoutConsultasInputObjectZodSchema = makeSchema();
