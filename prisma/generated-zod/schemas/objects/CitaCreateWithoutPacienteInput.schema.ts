import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { ConsultaCreateNestedManyWithoutCitaInputObjectSchema as ConsultaCreateNestedManyWithoutCitaInputObjectSchema } from './ConsultaCreateNestedManyWithoutCitaInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional(),
  pagoInicial: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoInicial' must be a Decimal",
}).optional(),
  consultas: z.lazy(() => ConsultaCreateNestedManyWithoutCitaInputObjectSchema).optional()
}).strict();
export const CitaCreateWithoutPacienteInputObjectSchema: z.ZodType<Prisma.CitaCreateWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateWithoutPacienteInput>;
export const CitaCreateWithoutPacienteInputObjectZodSchema = makeSchema();
