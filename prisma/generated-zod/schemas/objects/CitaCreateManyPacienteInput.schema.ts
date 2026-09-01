import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional()
}).strict();
export const CitaCreateManyPacienteInputObjectSchema: z.ZodType<Prisma.CitaCreateManyPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateManyPacienteInput>;
export const CitaCreateManyPacienteInputObjectZodSchema = makeSchema();
