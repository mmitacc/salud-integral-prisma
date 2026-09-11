import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UsuarioUpdateManyWithoutEspecialidadNestedInputObjectSchema as UsuarioUpdateManyWithoutEspecialidadNestedInputObjectSchema } from './UsuarioUpdateManyWithoutEspecialidadNestedInput.schema'

const makeSchema = () => z.object({
  tipo: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuarios: z.lazy(() => UsuarioUpdateManyWithoutEspecialidadNestedInputObjectSchema).optional()
}).strict();
export const EspecialidadUpdateInputObjectSchema: z.ZodType<Prisma.EspecialidadUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUpdateInput>;
export const EspecialidadUpdateInputObjectZodSchema = makeSchema();
