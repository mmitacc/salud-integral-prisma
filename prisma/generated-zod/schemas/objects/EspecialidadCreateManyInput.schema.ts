import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  tipo: z.string().max(100),
  registerdate: z.coerce.date().optional()
}).strict();
export const EspecialidadCreateManyInputObjectSchema: z.ZodType<Prisma.EspecialidadCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCreateManyInput>;
export const EspecialidadCreateManyInputObjectZodSchema = makeSchema();
