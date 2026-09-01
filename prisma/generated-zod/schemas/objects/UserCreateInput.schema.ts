import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  email: z.string(),
  password: z.string().max(100),
  role: RoleSchema,
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  activo: z.boolean().optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
