import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadCreateNestedOneWithoutMedicosInputObjectSchema as EspecialidadCreateNestedOneWithoutMedicosInputObjectSchema } from './EspecialidadCreateNestedOneWithoutMedicosInput.schema'

const makeSchema = () => z.object({
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z.email({ message: "El formato del correo electrónico no es válido" }).max(150),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  registerdate: z.coerce.date().optional(),
  especialidad: z.lazy(() => EspecialidadCreateNestedOneWithoutMedicosInputObjectSchema)
}).strict();
export const MedicoCreateWithoutConsultasInputObjectSchema: z.ZodType<Prisma.MedicoCreateWithoutConsultasInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoCreateWithoutConsultasInput>;
export const MedicoCreateWithoutConsultasInputObjectZodSchema = makeSchema();
