import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  idPaciente: z.number().int(),
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional(),
  pagoInicial: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoInicial' must be a Decimal",
}).optional()
}).strict();
export const CitaUncheckedCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaUncheckedCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUncheckedCreateWithoutConsultasInput>;
export const CitaUncheckedCreateWithoutConsultasInputObjectZodSchema = makeSchema();
