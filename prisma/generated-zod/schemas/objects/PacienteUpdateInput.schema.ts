import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HistorialUpdateManyWithoutPacienteNestedInputObjectSchema as HistorialUpdateManyWithoutPacienteNestedInputObjectSchema } from './HistorialUpdateManyWithoutPacienteNestedInput.schema';
import { CitaUpdateManyWithoutPacienteNestedInputObjectSchema as CitaUpdateManyWithoutPacienteNestedInputObjectSchema } from './CitaUpdateManyWithoutPacienteNestedInput.schema'

const makeSchema = () => z.object({
  nombres: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  apellidos: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telefono: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.email({ message: "El formato del correo electrónico no es válido" }).max(150), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  masculino: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechanacimiento: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tiposangre: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  alergias: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  historiales: z.lazy(() => HistorialUpdateManyWithoutPacienteNestedInputObjectSchema).optional(),
  citas: z.lazy(() => CitaUpdateManyWithoutPacienteNestedInputObjectSchema).optional()
}).strict();
export const PacienteUpdateInputObjectSchema: z.ZodType<Prisma.PacienteUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUpdateInput>;
export const PacienteUpdateInputObjectZodSchema = makeSchema();
