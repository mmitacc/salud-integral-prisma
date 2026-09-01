import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumEstadoCitaWithAggregatesFilterObjectSchema as EnumEstadoCitaWithAggregatesFilterObjectSchema } from './EnumEstadoCitaWithAggregatesFilter.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema'

const citascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CitaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  id_paciente: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => EnumEstadoCitaWithAggregatesFilterObjectSchema), EstadoCitaSchema]).optional()
}).strict();
export const CitaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CitaScalarWhereWithAggregatesInput> = citascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CitaScalarWhereWithAggregatesInput>;
export const CitaScalarWhereWithAggregatesInputObjectZodSchema = citascalarwherewithaggregatesinputSchema;
