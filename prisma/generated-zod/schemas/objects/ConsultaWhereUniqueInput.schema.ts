import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ConsultaWhereUniqueInputObjectSchema: z.ZodType<Prisma.ConsultaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaWhereUniqueInput>;
export const ConsultaWhereUniqueInputObjectZodSchema = makeSchema();
