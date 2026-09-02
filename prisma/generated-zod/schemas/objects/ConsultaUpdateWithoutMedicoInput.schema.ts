import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema as CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema } from './CitaUpdateOneRequiredWithoutConsultasNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  horario: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  costo: z.union([z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'costo' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cita: z.lazy(() => CitaUpdateOneRequiredWithoutConsultasNestedInputObjectSchema).optional()
}).strict();
export const ConsultaUpdateWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateWithoutMedicoInput>;
export const ConsultaUpdateWithoutMedicoInputObjectZodSchema = makeSchema();
