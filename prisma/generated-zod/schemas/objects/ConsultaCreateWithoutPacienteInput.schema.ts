import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { MedicoCreateNestedOneWithoutConsultasInputObjectSchema as MedicoCreateNestedOneWithoutConsultasInputObjectSchema } from './MedicoCreateNestedOneWithoutConsultasInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  estado: EstadoCitaSchema.optional(),
  citadate: z.coerce.date(),
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
  medico: z.lazy(() => MedicoCreateNestedOneWithoutConsultasInputObjectSchema)
}).strict();
export const ConsultaCreateWithoutPacienteInputObjectSchema: z.ZodType<Prisma.ConsultaCreateWithoutPacienteInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateWithoutPacienteInput>;
export const ConsultaCreateWithoutPacienteInputObjectZodSchema = makeSchema();
