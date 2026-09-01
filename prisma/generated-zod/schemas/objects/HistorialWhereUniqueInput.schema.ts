import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const HistorialWhereUniqueInputObjectSchema: z.ZodType<Prisma.HistorialWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.HistorialWhereUniqueInput>;
export const HistorialWhereUniqueInputObjectZodSchema = makeSchema();
