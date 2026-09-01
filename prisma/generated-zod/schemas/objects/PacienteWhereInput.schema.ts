import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { HistorialListRelationFilterObjectSchema as HistorialListRelationFilterObjectSchema } from './HistorialListRelationFilter.schema';
import { CitaListRelationFilterObjectSchema as CitaListRelationFilterObjectSchema } from './CitaListRelationFilter.schema'

const pacientewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PacienteWhereInputObjectSchema), z.lazy(() => PacienteWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PacienteWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PacienteWhereInputObjectSchema), z.lazy(() => PacienteWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombres: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  apellidos: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  telefono: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(150)]).optional(),
  masculino: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  fecha_nac: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tipoSangre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(5)]).optional(),
  alergias: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  creado: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  historiales: z.lazy(() => HistorialListRelationFilterObjectSchema).optional(),
  citas: z.lazy(() => CitaListRelationFilterObjectSchema).optional()
}).strict();
export const PacienteWhereInputObjectSchema: z.ZodType<Prisma.PacienteWhereInput> = pacientewhereinputSchema as unknown as z.ZodType<Prisma.PacienteWhereInput>;
export const PacienteWhereInputObjectZodSchema = pacientewhereinputSchema;
