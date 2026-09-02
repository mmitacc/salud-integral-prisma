import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { MedicoListRelationFilterObjectSchema as MedicoListRelationFilterObjectSchema } from './MedicoListRelationFilter.schema'

const especialidadwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EspecialidadWhereInputObjectSchema), z.lazy(() => EspecialidadWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EspecialidadWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EspecialidadWhereInputObjectSchema), z.lazy(() => EspecialidadWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  tipo: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  medicos: z.lazy(() => MedicoListRelationFilterObjectSchema).optional()
}).strict();
export const EspecialidadWhereInputObjectSchema: z.ZodType<Prisma.EspecialidadWhereInput> = especialidadwhereinputSchema as unknown as z.ZodType<Prisma.EspecialidadWhereInput>;
export const EspecialidadWhereInputObjectZodSchema = especialidadwhereinputSchema;
