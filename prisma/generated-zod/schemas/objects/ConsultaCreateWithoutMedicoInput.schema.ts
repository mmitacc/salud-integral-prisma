import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { PacienteCreateNestedOneWithoutConsultasInputObjectSchema as PacienteCreateNestedOneWithoutConsultasInputObjectSchema } from './PacienteCreateNestedOneWithoutConsultasInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  estado: EstadoCitaSchema.optional(),
  fecha: z.coerce.date(),
  horario: z.coerce.date(),
  costo: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'costo' must be a Decimal",
}).optional(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  paciente: z.lazy(() => PacienteCreateNestedOneWithoutConsultasInputObjectSchema)
}).strict();
export const ConsultaCreateWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaCreateWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateWithoutMedicoInput>;
export const ConsultaCreateWithoutMedicoInputObjectZodSchema = makeSchema();
