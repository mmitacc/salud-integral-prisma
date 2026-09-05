import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema as ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema } from './ConsultaUncheckedCreateNestedManyWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_especialidad: z.number().int(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  consultas: z.lazy(() => ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema).optional()
}).strict();
export const MedicoUncheckedCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.MedicoUncheckedCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUncheckedCreateWithoutUsuarioInput>;
export const MedicoUncheckedCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
