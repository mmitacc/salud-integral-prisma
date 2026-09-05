import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { MedicoUpdateOneWithoutUsuarioNestedInputObjectSchema as MedicoUpdateOneWithoutUsuarioNestedInputObjectSchema } from './MedicoUpdateOneWithoutUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  email: z.union([z.email({ message: "El formato del correo electrónico no es válido" }), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  medico: z.lazy(() => MedicoUpdateOneWithoutUsuarioNestedInputObjectSchema).optional()
}).strict();
export const UsuarioUpdateInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateInput>;
export const UsuarioUpdateInputObjectZodSchema = makeSchema();
