import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const especialidadscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EspecialidadScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EspecialidadScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EspecialidadScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EspecialidadScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EspecialidadScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  tipo: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  creado: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const EspecialidadScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EspecialidadScalarWhereWithAggregatesInput> = especialidadscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EspecialidadScalarWhereWithAggregatesInput>;
export const EspecialidadScalarWhereWithAggregatesInputObjectZodSchema = especialidadscalarwherewithaggregatesinputSchema;
