import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EspecialidadUpdateOneRequiredWithoutMedicosNestedInputObjectSchema as EspecialidadUpdateOneRequiredWithoutMedicosNestedInputObjectSchema } from './EspecialidadUpdateOneRequiredWithoutMedicosNestedInput.schema';
import { ConsultaUpdateManyWithoutMedicoNestedInputObjectSchema as ConsultaUpdateManyWithoutMedicoNestedInputObjectSchema } from './ConsultaUpdateManyWithoutMedicoNestedInput.schema'

const makeSchema = () => z.object({
  nombres: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  apellidos: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telefono: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string().max(150), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  masculino: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaNac: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  creado: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  especialidad: z.lazy(() => EspecialidadUpdateOneRequiredWithoutMedicosNestedInputObjectSchema).optional(),
  consultas: z.lazy(() => ConsultaUpdateManyWithoutMedicoNestedInputObjectSchema).optional()
}).strict();
export const MedicoUpdateInputObjectSchema: z.ZodType<Prisma.MedicoUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUpdateInput>;
export const MedicoUpdateInputObjectZodSchema = makeSchema();
