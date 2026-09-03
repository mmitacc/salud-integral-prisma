import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.email({ message: "El formato del correo electrónico no es válido" }),
  password: z.string().max(100),
  role: RoleSchema,
  username: z.string().max(50),
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  activo: z.boolean().optional(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = makeSchema();
