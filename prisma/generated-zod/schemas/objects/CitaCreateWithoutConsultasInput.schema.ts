import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { PacienteCreateNestedOneWithoutCitasInputObjectSchema as PacienteCreateNestedOneWithoutCitasInputObjectSchema } from './PacienteCreateNestedOneWithoutCitasInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  estado: EstadoCitaSchema.optional(),
  pagoinicial: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'pagoinicial' must be a Decimal",
}).optional(),
  registerdate: z.coerce.date().optional(),
  paciente: z.lazy(() => PacienteCreateNestedOneWithoutCitasInputObjectSchema)
}).strict();
export const CitaCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.CitaCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaCreateWithoutConsultasInput>;
export const CitaCreateWithoutConsultasInputObjectZodSchema = makeSchema();
