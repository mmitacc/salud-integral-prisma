import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PacienteUpdateOneRequiredWithoutHistorialesNestedInputObjectSchema as PacienteUpdateOneRequiredWithoutHistorialesNestedInputObjectSchema } from './PacienteUpdateOneRequiredWithoutHistorialesNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  motivo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  antecedentes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  triaje: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  diagnostico: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tratamiento: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  receta: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  paciente: z.lazy(() => PacienteUpdateOneRequiredWithoutHistorialesNestedInputObjectSchema).optional()
}).strict();
export const HistorialUpdateInputObjectSchema: z.ZodType<Prisma.HistorialUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialUpdateInput>;
export const HistorialUpdateInputObjectZodSchema = makeSchema();
