import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const pacientescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PacienteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PacienteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PacienteScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PacienteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PacienteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombres: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  apellidos: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  telefono: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(20)]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(150)]).optional(),
  masculino: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  fecha_nac: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  tipoSangre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(5)]).optional(),
  alergias: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  creado: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PacienteScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PacienteScalarWhereWithAggregatesInput> = pacientescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PacienteScalarWhereWithAggregatesInput>;
export const PacienteScalarWhereWithAggregatesInputObjectZodSchema = pacientescalarwherewithaggregatesinputSchema;
