import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_paciente: z.number().int(),
  estado: EstadoCitaSchema.optional(),
  pagoinicial: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoinicial' must be a Decimal",
}).optional(),
  registerdate: z.coerce.date().optional()
}).strict();
export const CitaUncheckedCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaUncheckedCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUncheckedCreateWithoutConsultasInput>;
export const CitaUncheckedCreateWithoutConsultasInputObjectZodSchema = makeSchema();
