import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema'

const usuarioscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioScalarWhereInputObjectSchema), z.lazy(() => UsuarioScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioScalarWhereInputObjectSchema), z.lazy(() => UsuarioScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_especialidad: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  nombres: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  apellidos: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  telefono: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  masculino: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  fechanacimiento: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const UsuarioScalarWhereInputObjectSchema: z.ZodType<Prisma.UsuarioScalarWhereInput> = usuarioscalarwhereinputSchema as unknown as z.ZodType<Prisma.UsuarioScalarWhereInput>;
export const UsuarioScalarWhereInputObjectZodSchema = usuarioscalarwhereinputSchema;
