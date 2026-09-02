import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { EnumEstadoCitaFieldUpdateOperationsInputObjectSchema as EnumEstadoCitaFieldUpdateOperationsInputObjectSchema } from './EnumEstadoCitaFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ConsultaUpdateManyWithoutCitaNestedInputObjectSchema as ConsultaUpdateManyWithoutCitaNestedInputObjectSchema } from './ConsultaUpdateManyWithoutCitaNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  estado: z.union([EstadoCitaSchema, z.lazy(() => EnumEstadoCitaFieldUpdateOperationsInputObjectSchema)]).optional(),
  pagoinicial: z.union([z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoinicial' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  consultas: z.lazy(() => ConsultaUpdateManyWithoutCitaNestedInputObjectSchema).optional()
}).strict();
export const CitaUpdateWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaUpdateWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUpdateWithoutPacienteInput>;
export const CitaUpdateWithoutPacienteInputObjectZodSchema = makeSchema();
