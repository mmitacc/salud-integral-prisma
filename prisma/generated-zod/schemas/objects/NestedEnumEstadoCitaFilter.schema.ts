import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema'

const nestedenumestadocitafilterSchema = z.object({
  equals: EstadoCitaSchema.optional(),
  in: EstadoCitaSchema.array().optional(),
  notIn: EstadoCitaSchema.array().optional(),
  not: z.union([EstadoCitaSchema, z.lazy(() => NestedEnumEstadoCitaFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumEstadoCitaFilterObjectSchema: z.ZodType<Prisma.NestedEnumEstadoCitaFilter> = nestedenumestadocitafilterSchema as unknown as z.ZodType<Prisma.NestedEnumEstadoCitaFilter>;
export const NestedEnumEstadoCitaFilterObjectZodSchema = nestedenumestadocitafilterSchema;
