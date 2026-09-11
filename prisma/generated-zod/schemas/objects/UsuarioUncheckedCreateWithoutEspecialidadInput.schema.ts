import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema';
import { ConsultaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema as ConsultaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateNestedManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
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
  deleted: z.boolean().optional(),
  consultas: z.lazy(() => ConsultaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuarioUncheckedCreateWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateWithoutEspecialidadInput>;
export const UsuarioUncheckedCreateWithoutEspecialidadInputObjectZodSchema = makeSchema();
