import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { CitaCreateNestedOneWithoutConsultasInputObjectSchema as CitaCreateNestedOneWithoutConsultasInputObjectSchema } from './CitaCreateNestedOneWithoutConsultasInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
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
  creado: z.coerce.date().optional(),
  cita: z.lazy(() => CitaCreateNestedOneWithoutConsultasInputObjectSchema)
}).strict();
export const ConsultaCreateWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaCreateWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateWithoutMedicoInput>;
export const ConsultaCreateWithoutMedicoInputObjectZodSchema = makeSchema();
