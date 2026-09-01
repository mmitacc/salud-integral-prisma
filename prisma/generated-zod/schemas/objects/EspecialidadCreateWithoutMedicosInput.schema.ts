import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  tipo: z.string().max(100),
  creado: z.coerce.date().optional()
}).strict();
export const EspecialidadCreateWithoutMedicosInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateWithoutMedicosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateWithoutMedicosInput>;
export const EspecialidadCreateWithoutMedicosInputObjectZodSchema = makeSchema();
