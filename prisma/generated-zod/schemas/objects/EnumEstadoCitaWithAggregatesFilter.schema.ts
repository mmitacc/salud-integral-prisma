import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { NestedEnumEstadoCitaWithAggregatesFilterObjectSchema as NestedEnumEstadoCitaWithAggregatesFilterObjectSchema } from './NestedEnumEstadoCitaWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEstadoCitaFilterObjectSchema as NestedEnumEstadoCitaFilterObjectSchema } from './NestedEnumEstadoCitaFilter.schema'

const makeSchema = () => z.object({
  equals: EstadoCitaSchema.optional(),
  in: EstadoCitaSchema.array().optional(),
  notIn: EstadoCitaSchema.array().optional(),
  not: z.union([EstadoCitaSchema, z.lazy(() => NestedEnumEstadoCitaWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEstadoCitaFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEstadoCitaFilterObjectSchema).optional()
}).strict();
export const EnumEstadoCitaWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumEstadoCitaWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumEstadoCitaWithAggregatesFilter>;
export const EnumEstadoCitaWithAggregatesFilterObjectZodSchema = makeSchema();
