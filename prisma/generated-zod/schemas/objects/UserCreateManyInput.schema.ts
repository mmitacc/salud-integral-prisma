import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  password: z.string().max(100),
  role: RoleSchema,
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  activo: z.boolean().optional()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = makeSchema();
