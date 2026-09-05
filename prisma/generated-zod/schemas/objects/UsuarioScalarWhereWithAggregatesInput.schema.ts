import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumRoleWithAggregatesFilterObjectSchema as EnumRoleWithAggregatesFilterObjectSchema } from './EnumRoleWithAggregatesFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const usuarioscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.email({ message: "El formato del correo electrónico no es válido" })]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  role: z.union([z.lazy(() => EnumRoleWithAggregatesFilterObjectSchema), RoleSchema]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const UsuarioScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UsuarioScalarWhereWithAggregatesInput> = usuarioscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UsuarioScalarWhereWithAggregatesInput>;
export const UsuarioScalarWhereWithAggregatesInputObjectZodSchema = usuarioscalarwherewithaggregatesinputSchema;
