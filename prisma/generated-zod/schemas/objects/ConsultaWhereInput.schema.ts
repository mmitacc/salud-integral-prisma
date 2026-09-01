import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CitaScalarRelationFilterObjectSchema as CitaScalarRelationFilterObjectSchema } from './CitaScalarRelationFilter.schema';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './CitaWhereInput.schema';
import { MedicoScalarRelationFilterObjectSchema as MedicoScalarRelationFilterObjectSchema } from './MedicoScalarRelationFilter.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

const consultawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConsultaWhereInputObjectSchema), z.lazy(() => ConsultaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConsultaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsultaWhereInputObjectSchema), z.lazy(() => ConsultaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_cita: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_medico: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  horario: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  cita: z.union([z.lazy(() => CitaScalarRelationFilterObjectSchema), z.lazy(() => CitaWhereInputObjectSchema)]).optional(),
  medico: z.union([z.lazy(() => MedicoScalarRelationFilterObjectSchema), z.lazy(() => MedicoWhereInputObjectSchema)]).optional()
}).strict();
export const ConsultaWhereInputObjectSchema: z.ZodType<Prisma.ConsultaWhereInput> = consultawhereinputSchema as unknown as z.ZodType<Prisma.ConsultaWhereInput>;
export const ConsultaWhereInputObjectZodSchema = consultawhereinputSchema;
