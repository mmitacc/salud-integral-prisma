import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const consultascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  id_cita: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  id_medico: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  horario: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ConsultaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ConsultaScalarWhereWithAggregatesInput> = consultascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ConsultaScalarWhereWithAggregatesInput>;
export const ConsultaScalarWhereWithAggregatesInputObjectZodSchema = consultascalarwherewithaggregatesinputSchema;
