import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  tipo: z.string(),
  creado: z.coerce.date().optional()
}).strict();
export const EspecialidadUncheckedCreateWithoutMedicosInputObjectSchema: z.ZodType<Prisma.EspecialidadUncheckedCreateWithoutMedicosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUncheckedCreateWithoutMedicosInput>;
export const EspecialidadUncheckedCreateWithoutMedicosInputObjectZodSchema = makeSchema();
