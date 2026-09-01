import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const consultascalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConsultaScalarWhereInputObjectSchema), z.lazy(() => ConsultaScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConsultaScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsultaScalarWhereInputObjectSchema), z.lazy(() => ConsultaScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_cita: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_medico: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  horario: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ConsultaScalarWhereInputObjectSchema: z.ZodType<Prisma.ConsultaScalarWhereInput> = consultascalarwhereinputSchema as unknown as z.ZodType<Prisma.ConsultaScalarWhereInput>;
export const ConsultaScalarWhereInputObjectZodSchema = consultascalarwhereinputSchema;
