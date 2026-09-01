import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { EnumEstadoCitaFieldUpdateOperationsInputObjectSchema as EnumEstadoCitaFieldUpdateOperationsInputObjectSchema } from './EnumEstadoCitaFieldUpdateOperationsInput.schema';
import { ConsultaUpdateManyWithoutCitaNestedInputObjectSchema as ConsultaUpdateManyWithoutCitaNestedInputObjectSchema } from './ConsultaUpdateManyWithoutCitaNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([EstadoCitaSchema, z.lazy(() => EnumEstadoCitaFieldUpdateOperationsInputObjectSchema)]).optional(),
  consultas: z.lazy(() => ConsultaUpdateManyWithoutCitaNestedInputObjectSchema).optional()
}).strict();
export const CitaUpdateWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaUpdateWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateWithoutPacienteInput>;
export const CitaUpdateWithoutPacienteInputObjectZodSchema = makeSchema();
