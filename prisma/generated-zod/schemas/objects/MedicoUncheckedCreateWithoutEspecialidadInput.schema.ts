import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema as ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema } from './ConsultaUncheckedCreateNestedManyWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string(),
  email: z.string(),
  masculino: z.boolean().optional(),
  fechaNac: z.coerce.date(),
  creado: z.coerce.date().optional(),
  consultas: z.lazy(() => ConsultaUncheckedCreateNestedManyWithoutMedicoInputObjectSchema).optional()
}).strict();
export const MedicoUncheckedCreateWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoUncheckedCreateWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoUncheckedCreateWithoutEspecialidadInput>;
export const MedicoUncheckedCreateWithoutEspecialidadInputObjectZodSchema = makeSchema();
