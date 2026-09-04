import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumEstadoCitaFilterObjectSchema as EnumEstadoCitaFilterObjectSchema } from './EnumEstadoCitaFilter.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { PacienteScalarRelationFilterObjectSchema as PacienteScalarRelationFilterObjectSchema } from './PacienteScalarRelationFilter.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './PacienteWhereInput.schema';
import { MedicoScalarRelationFilterObjectSchema as MedicoScalarRelationFilterObjectSchema } from './MedicoScalarRelationFilter.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const consultawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConsultaWhereInputObjectSchema), z.lazy(() => ConsultaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConsultaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsultaWhereInputObjectSchema), z.lazy(() => ConsultaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_paciente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_medico: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  estado: z.union([z.lazy(() => EnumEstadoCitaFilterObjectSchema), EstadoCitaSchema]).optional(),
  citadate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
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
  paciente: z.union([z.lazy(() => PacienteScalarRelationFilterObjectSchema), z.lazy(() => PacienteWhereInputObjectSchema)]).optional(),
  medico: z.union([z.lazy(() => MedicoScalarRelationFilterObjectSchema), z.lazy(() => MedicoWhereInputObjectSchema)]).optional()
}).strict();
export const ConsultaWhereInputObjectSchema: z.ZodType<Prisma.ConsultaWhereInput> = consultawhereinputSchema as unknown as z.ZodType<Prisma.ConsultaWhereInput>;
export const ConsultaWhereInputObjectZodSchema = consultawhereinputSchema;
