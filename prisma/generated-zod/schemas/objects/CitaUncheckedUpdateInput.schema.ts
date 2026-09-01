import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { EnumEstadoCitaFieldUpdateOperationsInputObjectSchema as EnumEstadoCitaFieldUpdateOperationsInputObjectSchema } from './EnumEstadoCitaFieldUpdateOperationsInput.schema';
import { ConsultaUncheckedUpdateManyWithoutCitaNestedInputObjectSchema as ConsultaUncheckedUpdateManyWithoutCitaNestedInputObjectSchema } from './ConsultaUncheckedUpdateManyWithoutCitaNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  id_paciente: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([EstadoCitaSchema, z.lazy(() => EnumEstadoCitaFieldUpdateOperationsInputObjectSchema)]).optional(),
  consultas: z.lazy(() => ConsultaUncheckedUpdateManyWithoutCitaNestedInputObjectSchema).optional()
}).strict();
export const CitaUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CitaUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUncheckedUpdateInput>;
export const CitaUncheckedUpdateInputObjectZodSchema = makeSchema();
