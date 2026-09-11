import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadArgsObjectSchema as EspecialidadArgsObjectSchema } from './EspecialidadArgs.schema';
import { ConsultaFindManySchema as ConsultaFindManySchema } from '../findManyConsulta.schema';
import { UsuarioCountOutputTypeArgsObjectSchema as UsuarioCountOutputTypeArgsObjectSchema } from './UsuarioCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  id_especialidad: z.boolean().optional(),
  nombres: z.boolean().optional(),
  apellidos: z.boolean().optional(),
  telefono: z.boolean().optional(),
  masculino: z.boolean().optional(),
  fechanacimiento: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  username: z.boolean().optional(),
  registerdate: z.boolean().optional(),
  deleted: z.boolean().optional(),
  especialidad: z.union([z.boolean(), z.lazy(() => EspecialidadArgsObjectSchema)]).optional(),
  consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UsuarioSelectObjectSchema: z.ZodType<Prisma.UsuarioSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioSelect>;
export const UsuarioSelectObjectZodSchema = makeSchema();
