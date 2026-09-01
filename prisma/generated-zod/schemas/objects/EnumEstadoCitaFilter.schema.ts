import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { NestedEnumEstadoCitaFilterObjectSchema as NestedEnumEstadoCitaFilterObjectSchema } from './NestedEnumEstadoCitaFilter.schema'

const makeSchema = () => z.object({
  equals: EstadoCitaSchema.optional(),
  in: EstadoCitaSchema.array().optional(),
  notIn: EstadoCitaSchema.array().optional(),
  not: z.union([EstadoCitaSchema, z.lazy(() => NestedEnumEstadoCitaFilterObjectSchema)]).optional()
}).strict();
export const EnumEstadoCitaFilterObjectSchema: z.ZodType<Prisma.EnumEstadoCitaFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumEstadoCitaFilter>;
export const EnumEstadoCitaFilterObjectZodSchema = makeSchema();
