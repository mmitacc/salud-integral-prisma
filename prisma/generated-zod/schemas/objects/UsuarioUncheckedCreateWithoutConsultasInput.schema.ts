import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_especialidad: z.number().int().optional().nullable(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  email: z.string(),
  password: z.string(),
  role: RoleSchema,
  username: z.string(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional()
}).strict();
export const UsuarioUncheckedCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateWithoutConsultasInput>;
export const UsuarioUncheckedCreateWithoutConsultasInputObjectZodSchema = makeSchema();
