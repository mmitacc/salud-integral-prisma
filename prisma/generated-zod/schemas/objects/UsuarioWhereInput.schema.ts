import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EspecialidadNullableScalarRelationFilterObjectSchema as EspecialidadNullableScalarRelationFilterObjectSchema } from './EspecialidadNullableScalarRelationFilter.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema';
import { ConsultaListRelationFilterObjectSchema as ConsultaListRelationFilterObjectSchema } from './ConsultaListRelationFilter.schema'

const usuariowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioWhereInputObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioWhereInputObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_especialidad: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  nombres: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  apellidos: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  telefono: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  masculino: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  fechanacimiento: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.email({ message: "El formato del correo electrónico no es válido" }).max(150)]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  especialidad: z.union([z.lazy(() => EspecialidadNullableScalarRelationFilterObjectSchema), z.lazy(() => EspecialidadWhereInputObjectSchema)]).optional(),
  consultas: z.lazy(() => ConsultaListRelationFilterObjectSchema).optional()
}).strict();
export const UsuarioWhereInputObjectSchema: z.ZodType<Prisma.UsuarioWhereInput> = usuariowhereinputSchema as unknown as z.ZodType<Prisma.UsuarioWhereInput>;
export const UsuarioWhereInputObjectZodSchema = usuariowhereinputSchema;
