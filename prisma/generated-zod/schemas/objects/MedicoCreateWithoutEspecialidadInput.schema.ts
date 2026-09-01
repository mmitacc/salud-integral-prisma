import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaCreateNestedManyWithoutMedicoInputObjectSchema as ConsultaCreateNestedManyWithoutMedicoInputObjectSchema } from './ConsultaCreateNestedManyWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.string().max(150),
  masculino: z.boolean().optional(),
  fecha_nac: z.coerce.date(),
  consultas: z.lazy(() => ConsultaCreateNestedManyWithoutMedicoInputObjectSchema).optional()
}).strict();
export const MedicoCreateWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.MedicoCreateWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateWithoutEspecialidadInput>;
export const MedicoCreateWithoutEspecialidadInputObjectZodSchema = makeSchema();
