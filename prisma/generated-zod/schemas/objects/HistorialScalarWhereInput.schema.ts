import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const historialscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HistorialScalarWhereInputObjectSchema), z.lazy(() => HistorialScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HistorialScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HistorialScalarWhereInputObjectSchema), z.lazy(() => HistorialScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_paciente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  motivo: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  antecedentes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  triaje: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  diagnostico: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tratamiento: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  receta: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  registerdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const HistorialScalarWhereInputObjectSchema: z.ZodType<Prisma.HistorialScalarWhereInput> = historialscalarwhereinputSchema as unknown as z.ZodType<Prisma.HistorialScalarWhereInput>;
export const HistorialScalarWhereInputObjectZodSchema = historialscalarwhereinputSchema;
