import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumEstadoCitaWithAggregatesFilterObjectSchema as EnumEstadoCitaWithAggregatesFilterObjectSchema } from './EnumEstadoCitaWithAggregatesFilter.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const consultascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConsultaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  id_paciente: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  id_medico: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  estado: z.union([z.lazy(() => EnumEstadoCitaWithAggregatesFilterObjectSchema), EstadoCitaSchema]).optional(),
  citadate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  costo: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'costo' must be a Decimal",
})]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const ConsultaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ConsultaScalarWhereWithAggregatesInput> = consultascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ConsultaScalarWhereWithAggregatesInput>;
export const ConsultaScalarWhereWithAggregatesInputObjectZodSchema = consultascalarwherewithaggregatesinputSchema;
