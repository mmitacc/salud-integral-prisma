import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.email({ message: "El formato del correo electrónico no es válido" }), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombres: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  apellidos: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  registerdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UserUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyInput>;
export const UserUncheckedUpdateManyInputObjectZodSchema = makeSchema();
