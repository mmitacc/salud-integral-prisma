import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_paciente: z.number().int(),
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional()
}).strict();
export const CitaCreateManyInputObjectSchema: z.ZodType<Prisma.CitaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateManyInput>;
export const CitaCreateManyInputObjectZodSchema = makeSchema();
