import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  idCita: z.number().int(),
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
  creado: z.coerce.date().optional()
}).strict();
export const ConsultaUncheckedCreateWithoutMedicoInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedCreateWithoutMedicoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedCreateWithoutMedicoInput>;
export const ConsultaUncheckedCreateWithoutMedicoInputObjectZodSchema = makeSchema();
