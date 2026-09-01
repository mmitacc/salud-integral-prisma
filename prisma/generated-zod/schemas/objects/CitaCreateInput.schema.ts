import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { PacienteCreateNestedOneWithoutCitasInputObjectSchema as PacienteCreateNestedOneWithoutCitasInputObjectSchema } from './PacienteCreateNestedOneWithoutCitasInput.schema';
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
  paciente: z.lazy(() => PacienteCreateNestedOneWithoutCitasInputObjectSchema),
  consultas: z.lazy(() => ConsultaCreateNestedManyWithoutCitaInputObjectSchema).optional()
}).strict();
export const CitaCreateInputObjectSchema: z.ZodType<Prisma.CitaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateInput>;
export const CitaCreateInputObjectZodSchema = makeSchema();
