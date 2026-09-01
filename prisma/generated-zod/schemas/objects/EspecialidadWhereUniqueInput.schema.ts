import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const EspecialidadWhereUniqueInputObjectSchema: z.ZodType<Prisma.EspecialidadWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadWhereUniqueInput>;
export const EspecialidadWhereUniqueInputObjectZodSchema = makeSchema();
