import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EstadoCitaSchema } from '../enums/EstadoCita.schema';
import { ConsultaUncheckedCreateNestedManyWithoutCitaInputObjectSchema as ConsultaUncheckedCreateNestedManyWithoutCitaInputObjectSchema } from './ConsultaUncheckedCreateNestedManyWithoutCitaInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_paciente: z.number().int(),
  fecha: z.coerce.date().optional(),
  estado: EstadoCitaSchema.optional(),
  consultas: z.lazy(() => ConsultaUncheckedCreateNestedManyWithoutCitaInputObjectSchema).optional()
}).strict();
export const CitaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CitaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaUncheckedCreateInput>;
export const CitaUncheckedCreateInputObjectZodSchema = makeSchema();
