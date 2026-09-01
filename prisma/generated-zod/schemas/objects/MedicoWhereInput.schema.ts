import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EspecialidadScalarRelationFilterObjectSchema as EspecialidadScalarRelationFilterObjectSchema } from './EspecialidadScalarRelationFilter.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './EspecialidadWhereInput.schema';
import { ConsultaListRelationFilterObjectSchema as ConsultaListRelationFilterObjectSchema } from './ConsultaListRelationFilter.schema'

const medicowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MedicoWhereInputObjectSchema), z.lazy(() => MedicoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MedicoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MedicoWhereInputObjectSchema), z.lazy(() => MedicoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idEspecialidad: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombres: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  apellidos: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  telefono: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(150)]).optional(),
  masculino: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  fechaNac: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  creado: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  especialidad: z.union([z.lazy(() => EspecialidadScalarRelationFilterObjectSchema), z.lazy(() => EspecialidadWhereInputObjectSchema)]).optional(),
  consultas: z.lazy(() => ConsultaListRelationFilterObjectSchema).optional()
}).strict();
export const MedicoWhereInputObjectSchema: z.ZodType<Prisma.MedicoWhereInput> = medicowhereinputSchema as unknown as z.ZodType<Prisma.MedicoWhereInput>;
export const MedicoWhereInputObjectZodSchema = medicowhereinputSchema;
