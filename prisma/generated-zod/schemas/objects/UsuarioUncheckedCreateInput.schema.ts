import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema';
import { MedicoUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema as MedicoUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema } from './MedicoUncheckedCreateNestedOneWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.email({ message: "El formato del correo electrónico no es válido" }),
  password: z.string().max(100),
  role: RoleSchema,
  username: z.string().max(50),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  medico: z.lazy(() => MedicoUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateInput>;
export const UsuarioUncheckedCreateInputObjectZodSchema = makeSchema();
