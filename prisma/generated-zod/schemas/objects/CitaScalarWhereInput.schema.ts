import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumEstadoCitaFilterObjectSchema as EnumEstadoCitaFilterObjectSchema } from './EnumEstadoCitaFilter.schema';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema'

const citascalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CitaScalarWhereInputObjectSchema), z.lazy(() => CitaScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CitaScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CitaScalarWhereInputObjectSchema), z.lazy(() => CitaScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_paciente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => EnumEstadoCitaFilterObjectSchema), EstadoCitaSchema]).optional()
}).strict();
export const CitaScalarWhereInputObjectSchema: z.ZodType<Prisma.CitaScalarWhereInput> = citascalarwhereinputSchema as unknown as z.ZodType<Prisma.CitaScalarWhereInput>;
export const CitaScalarWhereInputObjectZodSchema = citascalarwhereinputSchema;
