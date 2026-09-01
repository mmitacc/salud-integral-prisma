import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema'

const makeSchema = () => z.object({
  set: EstadoCitaSchema.optional()
}).strict();
export const EnumEstadoCitaFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumEstadoCitaFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumEstadoCitaFieldUpdateOperationsInput>;
export const EnumEstadoCitaFieldUpdateOperationsInputObjectZodSchema = makeSchema();
