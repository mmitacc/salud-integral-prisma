import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema as ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema } from './ConsultaUncheckedCreateNestedManyWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  id_especialidad: z.number().int(),
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.string().max(150),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date(),
  consultas: z.lazy(() => ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema).optional()
}).strict();
export const MedicoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MedicoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUncheckedCreateInput>;
export const MedicoUncheckedCreateInputObjectZodSchema = makeSchema();
