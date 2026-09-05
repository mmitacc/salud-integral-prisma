import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  password: z.string(),
  role: RoleSchema,
  username: z.string(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional()
}).strict();
export const UsuarioUncheckedCreateWithoutMedicoInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateWithoutMedicoInput>;
export const UsuarioUncheckedCreateWithoutMedicoInputObjectZodSchema = makeSchema();
