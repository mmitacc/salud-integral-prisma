import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumEstadoCitaFilterObjectSchema as EnumEstadoCitaFilterObjectSchema } from './EnumEstadoCitaFilter.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { PacienteScalarRelationFilterObjectSchema as PacienteScalarRelationFilterObjectSchema } from './PacienteScalarRelationFilter.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema';
import { ConsultaListRelationFilterObjectSchema as ConsultaListRelationFilterObjectSchema } from './ConsultaListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const citawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CitaWhereInputObjectSchema), z.lazy(() => CitaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CitaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CitaWhereInputObjectSchema), z.lazy(() => CitaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idPaciente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => EnumEstadoCitaFilterObjectSchema), EstadoCitaSchema]).optional(),
  pagoInicial: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoInicial' must be a Decimal",
})]).optional(),
  paciente: z.union([z.lazy(() => PacienteScalarRelationFilterObjectSchema), z.lazy(() => PacienteWhereInputObjectSchema)]).optional(),
  consultas: z.lazy(() => ConsultaListRelationFilterObjectSchema).optional()
}).strict();
export const CitaWhereInputObjectSchema: z.ZodType<Prisma.CitaWhereInput> = citawhereinputSchema as unknown as z.ZodType<Prisma.CitaWhereInput>;
export const CitaWhereInputObjectZodSchema = citawhereinputSchema;
