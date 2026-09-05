import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema';
import { MedicoCreateNestedOneWithoutUsuarioInputObjectSchema as MedicoCreateNestedOneWithoutUsuarioInputObjectSchema } from './MedicoCreateNestedOneWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  email: z.email({ message: "El formato del correo electrónico no es válido" }),
  password: z.string().max(100),
  role: RoleSchema,
  username: z.string().max(50),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  medico: z.lazy(() => MedicoCreateNestedOneWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioCreateInputObjectSchema: z.ZodType<Prisma.UsuarioCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateInput>;
export const UsuarioCreateInputObjectZodSchema = makeSchema();
