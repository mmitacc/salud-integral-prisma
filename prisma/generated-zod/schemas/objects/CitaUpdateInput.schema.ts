import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { EnumEstadoCitaFieldUpdateOperationsInputObjectSchema as EnumEstadoCitaFieldUpdateOperationsInputObjectSchema } from './EnumEstadoCitaFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { PacienteUpdateOneRequiredWithoutCitasNestedInputObjectSchema as PacienteUpdateOneRequiredWithoutCitasNestedInputObjectSchema } from './PacienteUpdateOneRequiredWithoutCitasNestedInput.schema';
import { ConsultaUpdateManyWithoutCitaNestedInputObjectSchema as ConsultaUpdateManyWithoutCitaNestedInputObjectSchema } from './ConsultaUpdateManyWithoutCitaNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([EstadoCitaSchema, z.lazy(() => EnumEstadoCitaFieldUpdateOperationsInputObjectSchema)]).optional(),
  pagoInicial: z.union([z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoInicial' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  paciente: z.lazy(() => PacienteUpdateOneRequiredWithoutCitasNestedInputObjectSchema).optional(),
  consultas: z.lazy(() => ConsultaUpdateManyWithoutCitaNestedInputObjectSchema).optional()
}).strict();
export const CitaUpdateInputObjectSchema: z.ZodType<Prisma.CitaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateInput>;
export const CitaUpdateInputObjectZodSchema = makeSchema();
