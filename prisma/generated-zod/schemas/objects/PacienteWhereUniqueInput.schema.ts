import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.email({ message: "El formato del correo electrónico no es válido" }).max(150).optional()
}).strict();
export const PacienteWhereUniqueInputObjectSchema: z.ZodType<Prisma.PacienteWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PacienteWhereUniqueInput>;
export const PacienteWhereUniqueInputObjectZodSchema = makeSchema();
