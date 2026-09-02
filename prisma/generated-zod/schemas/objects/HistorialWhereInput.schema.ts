import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PacienteScalarRelationFilterObjectSchema as PacienteScalarRelationFilterObjectSchema } from './PacienteScalarRelationFilter.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema'

const historialwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HistorialWhereInputObjectSchema), z.lazy(() => HistorialWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HistorialWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HistorialWhereInputObjectSchema), z.lazy(() => HistorialWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_paciente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  motivo: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  antecedentes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  triaje: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  diagnostico: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tratamiento: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  receta: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  paciente: z.union([z.lazy(() => PacienteScalarRelationFilterObjectSchema), z.lazy(() => PacienteWhereInputObjectSchema)]).optional()
}).strict();
export const HistorialWhereInputObjectSchema: z.ZodType<Prisma.HistorialWhereInput> = historialwhereinputSchema as unknown as z.ZodType<Prisma.HistorialWhereInput>;
export const HistorialWhereInputObjectZodSchema = historialwhereinputSchema;
