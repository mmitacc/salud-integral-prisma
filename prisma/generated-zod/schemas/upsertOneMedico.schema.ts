import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoSelectObjectSchema as MedicoSelectObjectSchema } from './objects/MedicoSelect.schema';
import { MedicoIncludeObjectSchema as MedicoIncludeObjectSchema } from './objects/MedicoInclude.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './objects/MedicoWhereUniqueInput.schema';
import { MedicoCreateInputObjectSchema as MedicoCreateInputObjectSchema } from './objects/MedicoCreateInput.schema';
import { MedicoUncheckedCreateInputObjectSchema as MedicoUncheckedCreateInputObjectSchema } from './objects/MedicoUncheckedCreateInput.schema';
import { MedicoUpdateInputObjectSchema as MedicoUpdateInputObjectSchema } from './objects/MedicoUpdateInput.schema';
import { MedicoUncheckedUpdateInputObjectSchema as MedicoUncheckedUpdateInputObjectSchema } from './objects/MedicoUncheckedUpdateInput.schema';

export const MedicoUpsertOneSchema: z.ZodType<Prisma.MedicoUpsertArgs> = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), where: MedicoWhereUniqueInputObjectSchema, create: z.union([ MedicoCreateInputObjectSchema, MedicoUncheckedCreateInputObjectSchema ]), update: z.union([ MedicoUpdateInputObjectSchema, MedicoUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MedicoUpsertArgs>;

export const MedicoUpsertOneZodSchema = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), where: MedicoWhereUniqueInputObjectSchema, create: z.union([ MedicoCreateInputObjectSchema, MedicoUncheckedCreateInputObjectSchema ]), update: z.union([ MedicoUpdateInputObjectSchema, MedicoUncheckedUpdateInputObjectSchema ]) }).strict();