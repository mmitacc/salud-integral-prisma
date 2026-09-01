import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoSelectObjectSchema as MedicoSelectObjectSchema } from './objects/MedicoSelect.schema';
import { MedicoIncludeObjectSchema as MedicoIncludeObjectSchema } from './objects/MedicoInclude.schema';
import { MedicoCreateInputObjectSchema as MedicoCreateInputObjectSchema } from './objects/MedicoCreateInput.schema';
import { MedicoUncheckedCreateInputObjectSchema as MedicoUncheckedCreateInputObjectSchema } from './objects/MedicoUncheckedCreateInput.schema';

export const MedicoCreateOneSchema: z.ZodType<Prisma.MedicoCreateArgs> = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), data: z.union([MedicoCreateInputObjectSchema, MedicoUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MedicoCreateArgs>;

export const MedicoCreateOneZodSchema = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), data: z.union([MedicoCreateInputObjectSchema, MedicoUncheckedCreateInputObjectSchema]) }).strict();