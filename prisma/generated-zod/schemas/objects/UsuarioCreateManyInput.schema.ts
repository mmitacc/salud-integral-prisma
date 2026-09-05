import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.email({ message: "El formato del correo electrónico no es válido" }),
  password: z.string().max(100),
  role: RoleSchema,
  username: z.string().max(50),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional()
}).strict();
export const UsuarioCreateManyInputObjectSchema: z.ZodType<Prisma.UsuarioCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateManyInput>;
export const UsuarioCreateManyInputObjectZodSchema = makeSchema();
