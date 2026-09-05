import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { MedicoNullableScalarRelationFilterObjectSchema as MedicoNullableScalarRelationFilterObjectSchema } from './MedicoNullableScalarRelationFilter.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

const usuariowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioWhereInputObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioWhereInputObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.email({ message: "El formato del correo electrónico no es válido" })]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  medico: z.union([z.lazy(() => MedicoNullableScalarRelationFilterObjectSchema), z.lazy(() => MedicoWhereInputObjectSchema)]).optional()
}).strict();
export const UsuarioWhereInputObjectSchema: z.ZodType<Prisma.UsuarioWhereInput> = usuariowhereinputSchema as unknown as z.ZodType<Prisma.UsuarioWhereInput>;
export const UsuarioWhereInputObjectZodSchema = usuariowhereinputSchema;
