import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumEstadoCitaFilterObjectSchema as EnumEstadoCitaFilterObjectSchema } from './EnumEstadoCitaFilter.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const consultascalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConsultaScalarWhereInputObjectSchema), z.lazy(() => ConsultaScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConsultaScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsultaScalarWhereInputObjectSchema), z.lazy(() => ConsultaScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_paciente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_medico: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  estado: z.union([z.lazy(() => EnumEstadoCitaFilterObjectSchema), EstadoCitaSchema]).optional(),
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
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const ConsultaScalarWhereInputObjectSchema: z.ZodType<Prisma.ConsultaScalarWhereInput> = consultascalarwhereinputSchema as unknown as z.ZodType<Prisma.ConsultaScalarWhereInput>;
export const ConsultaScalarWhereInputObjectZodSchema = consultascalarwhereinputSchema;
