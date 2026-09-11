import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { PacienteCreateNestedOneWithoutConsultasInputObjectSchema as PacienteCreateNestedOneWithoutConsultasInputObjectSchema } from './PacienteCreateNestedOneWithoutConsultasInput.schema';
import { UsuarioCreateNestedOneWithoutConsultasInputObjectSchema as UsuarioCreateNestedOneWithoutConsultasInputObjectSchema } from './UsuarioCreateNestedOneWithoutConsultasInput.schema'

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
  paciente: z.lazy(() => PacienteCreateNestedOneWithoutConsultasInputObjectSchema),
  usuario: z.lazy(() => UsuarioCreateNestedOneWithoutConsultasInputObjectSchema)
}).strict();
export const ConsultaCreateInputObjectSchema: z.ZodType<Prisma.ConsultaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaCreateInput>;
export const ConsultaCreateInputObjectZodSchema = makeSchema();
