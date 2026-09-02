import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { CitaScalarRelationFilterObjectSchema as CitaScalarRelationFilterObjectSchema } from './CitaScalarRelationFilter.schema';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './CitaWhereInput.schema';
import { MedicoScalarRelationFilterObjectSchema as MedicoScalarRelationFilterObjectSchema } from './MedicoScalarRelationFilter.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const consultawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConsultaWhereInputObjectSchema), z.lazy(() => ConsultaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConsultaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsultaWhereInputObjectSchema), z.lazy(() => ConsultaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_cita: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_medico: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  horario: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  costo: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'costo' must be a Decimal",
})]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  cita: z.union([z.lazy(() => CitaScalarRelationFilterObjectSchema), z.lazy(() => CitaWhereInputObjectSchema)]).optional(),
  medico: z.union([z.lazy(() => MedicoScalarRelationFilterObjectSchema), z.lazy(() => MedicoWhereInputObjectSchema)]).optional()
}).strict();
export const ConsultaWhereInputObjectSchema: z.ZodType<Prisma.ConsultaWhereInput> = consultawhereinputSchema as unknown as z.ZodType<Prisma.ConsultaWhereInput>;
export const ConsultaWhereInputObjectZodSchema = consultawhereinputSchema;
