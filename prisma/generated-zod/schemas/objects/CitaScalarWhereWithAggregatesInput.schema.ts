import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumEstadoCitaWithAggregatesFilterObjectSchema as EnumEstadoCitaWithAggregatesFilterObjectSchema } from './EnumEstadoCitaWithAggregatesFilter.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const citascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idPaciente: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => EnumEstadoCitaWithAggregatesFilterObjectSchema), EstadoCitaSchema]).optional(),
  pagoInicial: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoInicial' must be a Decimal",
})]).optional()
}).strict();
export const CitaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CitaScalarWhereWithAggregatesInput> = citascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CitaScalarWhereWithAggregatesInput>;
export const CitaScalarWhereWithAggregatesInputObjectZodSchema = citascalarwherewithaggregatesinputSchema;
