import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const CitaWhereUniqueInputObjectSchema: z.ZodType<Prisma.CitaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaWhereUniqueInput>;
export const CitaWhereUniqueInputObjectZodSchema = makeSchema();
