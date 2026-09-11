import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  tipo: z.string(),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional()
}).strict();
export const EspecialidadUncheckedCreateWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EspecialidadUncheckedCreateWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadUncheckedCreateWithoutUsuariosInput>;
export const EspecialidadUncheckedCreateWithoutUsuariosInputObjectZodSchema = makeSchema();
