import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  tipo: z.string().max(100),
  registerdate: z.coerce.date().optional(),
  deleted: z.boolean().optional()
}).strict();
export const EspecialidadCreateWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateWithoutUsuariosInput>;
export const EspecialidadCreateWithoutUsuariosInputObjectZodSchema = makeSchema();
