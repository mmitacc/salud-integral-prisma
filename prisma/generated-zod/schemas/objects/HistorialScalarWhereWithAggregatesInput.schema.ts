import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const historialscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => HistorialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HistorialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HistorialScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HistorialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HistorialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idPaciente: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  motivo: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  antecedentes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  triaje: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  diagnostico: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  tratamiento: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  receta: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const HistorialScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.HistorialScalarWhereWithAggregatesInput> = historialscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.HistorialScalarWhereWithAggregatesInput>;
export const HistorialScalarWhereWithAggregatesInputObjectZodSchema = historialscalarwherewithaggregatesinputSchema;
