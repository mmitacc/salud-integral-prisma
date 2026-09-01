import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoCreateManyInputObjectSchema as MedicoCreateManyInputObjectSchema } from './objects/MedicoCreateManyInput.schema';

export const MedicoCreateManySchema: z.ZodType<Prisma.MedicoCreateManyArgs> = z.object({ data: z.union([ MedicoCreateManyInputObjectSchema, z.array(MedicoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MedicoCreateManyArgs>;

export const MedicoCreateManyZodSchema = z.object({ data: z.union([ MedicoCreateManyInputObjectSchema, z.array(MedicoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();