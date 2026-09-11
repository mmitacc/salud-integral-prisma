import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { RoleSchema } from '../enums/Role.schema';
import { EspecialidadCreateNestedOneWithoutUsuariosInputObjectSchema as EspecialidadCreateNestedOneWithoutUsuariosInputObjectSchema } from './EspecialidadCreateNestedOneWithoutUsuariosInput.schema'

const makeSchema = () => z.object({
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  email: z.email({ message: "El formato del correo electrónico no es válido" }).max(150),
  password: z.string().max(100),
  role: RoleSchema,
  username: z.string().max(50),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  especialidad: z.lazy(() => EspecialidadCreateNestedOneWithoutUsuariosInputObjectSchema).optional()
}).strict();
export const UsuarioCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.UsuarioCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateWithoutConsultasInput>;
export const UsuarioCreateWithoutConsultasInputObjectZodSchema = makeSchema();
