import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ConsultaUpdateManyWithoutMedicoNestedInputObjectSchema as ConsultaUpdateManyWithoutMedicoNestedInputObjectSchema } from './ConsultaUpdateManyWithoutMedicoNestedInput.schema';
import { UsuarioUpdateOneRequiredWithoutMedicoNestedInputObjectSchema as UsuarioUpdateOneRequiredWithoutMedicoNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutMedicoNestedInput.schema'

const makeSchema = () => z.object({
  nombres: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  apellidos: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telefono: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.email({ message: "El formato del correo electrónico no es válido" }).max(150), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  masculino: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechanacimiento: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  consultas: z.lazy(() => ConsultaUpdateManyWithoutMedicoNestedInputObjectSchema).optional(),
  usuario: z.lazy(() => UsuarioUpdateOneRequiredWithoutMedicoNestedInputObjectSchema).optional()
}).strict();
export const MedicoUpdateWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoUpdateWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateWithoutEspecialidadInput>;
export const MedicoUpdateWithoutEspecialidadInputObjectZodSchema = makeSchema();
