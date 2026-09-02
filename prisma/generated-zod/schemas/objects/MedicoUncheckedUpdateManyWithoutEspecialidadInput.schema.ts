import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombres: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  apellidos: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telefono: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.email({ message: "El formato del correo electrónico no es válido" }).max(150), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  masculino: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechanacimiento: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MedicoUncheckedUpdateManyWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoUncheckedUpdateManyWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUncheckedUpdateManyWithoutEspecialidadInput>;
export const MedicoUncheckedUpdateManyWithoutEspecialidadInputObjectZodSchema = makeSchema();
