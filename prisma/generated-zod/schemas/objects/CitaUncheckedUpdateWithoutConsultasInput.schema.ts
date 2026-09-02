import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { EnumEstadoCitaFieldUpdateOperationsInputObjectSchema as EnumEstadoCitaFieldUpdateOperationsInputObjectSchema } from './EnumEstadoCitaFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  id_paciente: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([EstadoCitaSchema, z.lazy(() => EnumEstadoCitaFieldUpdateOperationsInputObjectSchema)]).optional(),
  pagoinicial: z.union([z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoinicial' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CitaUncheckedUpdateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaUncheckedUpdateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUncheckedUpdateWithoutConsultasInput>;
export const CitaUncheckedUpdateWithoutConsultasInputObjectZodSchema = makeSchema();
