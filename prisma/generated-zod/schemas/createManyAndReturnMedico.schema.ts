import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoSelectObjectSchema as MedicoSelectObjectSchema } from './objects/MedicoSelect.schema';
import { MedicoCreateManyInputObjectSchema as MedicoCreateManyInputObjectSchema } from './objects/MedicoCreateManyInput.schema';

export const MedicoCreateManyAndReturnSchema: z.ZodType<Prisma.MedicoCreateManyAndReturnArgs> = z.object({ select: MedicoSelectObjectSchema.optional(), data: z.union([ MedicoCreateManyInputObjectSchema, z.array(MedicoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MedicoCreateManyAndReturnArgs>;

export const MedicoCreateManyAndReturnZodSchema = z.object({ select: MedicoSelectObjectSchema.optional(), data: z.union([ MedicoCreateManyInputObjectSchema, z.array(MedicoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();