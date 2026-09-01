import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string().max(150).optional()
}).strict();
export const MedicoWhereUniqueInputObjectSchema: z.ZodType<Prisma.MedicoWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoWhereUniqueInput>;
export const MedicoWhereUniqueInputObjectZodSchema = makeSchema();
