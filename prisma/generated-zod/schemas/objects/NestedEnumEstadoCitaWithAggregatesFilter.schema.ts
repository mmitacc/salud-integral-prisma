import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEstadoCitaFilterObjectSchema as NestedEnumEstadoCitaFilterObjectSchema } from './NestedEnumEstadoCitaFilter.schema'

const nestedenumestadocitawithaggregatesfilterSchema = z.object({
  equals: EstadoCitaSchema.optional(),
  in: EstadoCitaSchema.array().optional(),
  notIn: EstadoCitaSchema.array().optional(),
  not: z.union([EstadoCitaSchema, z.lazy(() => NestedEnumEstadoCitaWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEstadoCitaFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEstadoCitaFilterObjectSchema).optional()
}).strict();
export const NestedEnumEstadoCitaWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumEstadoCitaWithAggregatesFilter> = nestedenumestadocitawithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumEstadoCitaWithAggregatesFilter>;
export const NestedEnumEstadoCitaWithAggregatesFilterObjectZodSchema = nestedenumestadocitawithaggregatesfilterSchema;
