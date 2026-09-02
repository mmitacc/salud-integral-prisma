import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadCreateNestedOneWithoutMedicosInputObjectSchema as EspecialidadCreateNestedOneWithoutMedicosInputObjectSchema } from './EspecialidadCreateNestedOneWithoutMedicosInput.schema';
import { ConsultaCreateNestedManyWithoutMedicoInputObjectSchema as ConsultaCreateNestedManyWithoutMedicoInputObjectSchema } from './ConsultaCreateNestedManyWithoutMedicoInput.schema'

const makeSchema = () => z.object({
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.email({ message: "El formato del correo electrónico no es válido" }).max(150),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional(),
  especialidad: z.lazy(() => EspecialidadCreateNestedOneWithoutMedicosInputObjectSchema),
  consultas: z.lazy(() => ConsultaCreateNestedManyWithoutMedicoInputObjectSchema).optional()
}).strict();
export const MedicoCreateInputObjectSchema: z.ZodType<Prisma.MedicoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateInput>;
export const MedicoCreateInputObjectZodSchema = makeSchema();
