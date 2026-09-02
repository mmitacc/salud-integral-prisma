import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HistorialUncheckedUpdateManyWithoutPacienteNestedInputObjectSchema as HistorialUncheckedUpdateManyWithoutPacienteNestedInputObjectSchema } from './HistorialUncheckedUpdateManyWithoutPacienteNestedInput.schema';
import { CitaUncheckedUpdateManyWithoutPacienteNestedInputObjectSchema as CitaUncheckedUpdateManyWithoutPacienteNestedInputObjectSchema } from './CitaUncheckedUpdateManyWithoutPacienteNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  historiales: z.lazy(() => HistorialUncheckedUpdateManyWithoutPacienteNestedInputObjectSchema).optional(),
  citas: z.lazy(() => CitaUncheckedUpdateManyWithoutPacienteNestedInputObjectSchema).optional()
}).strict();
export const PacienteUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PacienteUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteUncheckedUpdateInput>;
export const PacienteUncheckedUpdateInputObjectZodSchema = makeSchema();
