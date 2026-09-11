import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { EnumEstadoCitaFieldUpdateOperationsInputObjectSchema as EnumEstadoCitaFieldUpdateOperationsInputObjectSchema } from './EnumEstadoCitaFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PacienteUpdateOneRequiredWithoutConsultasNestedInputObjectSchema as PacienteUpdateOneRequiredWithoutConsultasNestedInputObjectSchema } from './PacienteUpdateOneRequiredWithoutConsultasNestedInput.schema';
import { UsuarioUpdateOneRequiredWithoutConsultasNestedInputObjectSchema as UsuarioUpdateOneRequiredWithoutConsultasNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutConsultasNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  estado: z.union([EstadoCitaSchema, z.lazy(() => EnumEstadoCitaFieldUpdateOperationsInputObjectSchema)]).optional(),
  citadate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  costo: z.union([z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'costo' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  paciente: z.lazy(() => PacienteUpdateOneRequiredWithoutConsultasNestedInputObjectSchema).optional(),
  usuario: z.lazy(() => UsuarioUpdateOneRequiredWithoutConsultasNestedInputObjectSchema).optional()
}).strict();
export const ConsultaUpdateInputObjectSchema: z.ZodType<Prisma.ConsultaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUpdateInput>;
export const ConsultaUpdateInputObjectZodSchema = makeSchema();
