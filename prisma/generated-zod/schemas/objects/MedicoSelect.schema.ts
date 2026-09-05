import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadArgsObjectSchema as EspecialidadArgsObjectSchema } from './EspecialidadArgs.schema';
import { ConsultaFindManySchema as ConsultaFindManySchema } from '../findManyConsulta.schema';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './UsuarioArgs.schema';
import { MedicoCountOutputTypeArgsObjectSchema as MedicoCountOutputTypeArgsObjectSchema } from './MedicoCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  id_especialidad: z.boolean().optional(),
  id_usuario: z.boolean().optional(),
  nombres: z.boolean().optional(),
  apellidos: z.boolean().optional(),
  telefono: z.boolean().optional(),
  email: z.boolean().optional(),
  masculino: z.boolean().optional(),
  fechanacimiento: z.boolean().optional(),
  registerdate: z.boolean().optional(),
  deleted: z.boolean().optional(),
  especialidad: z.union([z.boolean(), z.lazy(() => EspecialidadArgsObjectSchema)]).optional(),
  consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
  usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MedicoCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MedicoSelectObjectSchema: z.ZodType<Prisma.MedicoSelect> = makeSchema() as unknown as z.ZodType<Prisma.MedicoSelect>;
export const MedicoSelectObjectZodSchema = makeSchema();
