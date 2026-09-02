import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { CitaCreateNestedOneWithoutConsultasInputObjectSchema as CitaCreateNestedOneWithoutConsultasInputObjectSchema } from './CitaCreateNestedOneWithoutConsultasInput.schema';
import { MedicoCreateNestedOneWithoutConsultasInputObjectSchema as MedicoCreateNestedOneWithoutConsultasInputObjectSchema } from './MedicoCreateNestedOneWithoutConsultasInput.schema'

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
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  cita: z.lazy(() => CitaCreateNestedOneWithoutConsultasInputObjectSchema),
  medico: z.lazy(() => MedicoCreateNestedOneWithoutConsultasInputObjectSchema)
}).strict();
export const ConsultaCreateInputObjectSchema: z.ZodType<Prisma.ConsultaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateInput>;
export const ConsultaCreateInputObjectZodSchema = makeSchema();
