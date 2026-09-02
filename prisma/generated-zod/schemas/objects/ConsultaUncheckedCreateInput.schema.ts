import * as z from 'zod';
import { Prisma } from '../../../generated-client/browser';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_cita: z.number().int(),
  id_medico: z.number().int(),
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
  registerdate: z.coerce.date().optional()
}).strict();
export const ConsultaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ConsultaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaUncheckedCreateInput>;
export const ConsultaUncheckedCreateInputObjectZodSchema = makeSchema();
