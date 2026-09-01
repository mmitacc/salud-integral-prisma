import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoSelectObjectSchema as MedicoSelectObjectSchema } from './objects/MedicoSelect.schema';
import { MedicoIncludeObjectSchema as MedicoIncludeObjectSchema } from './objects/MedicoInclude.schema';
import { MedicoUpdateInputObjectSchema as MedicoUpdateInputObjectSchema } from './objects/MedicoUpdateInput.schema';
import { MedicoUncheckedUpdateInputObjectSchema as MedicoUncheckedUpdateInputObjectSchema } from './objects/MedicoUncheckedUpdateInput.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './objects/MedicoWhereUniqueInput.schema';

export const MedicoUpdateOneSchema: z.ZodType<Prisma.MedicoUpdateArgs> = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), data: z.union([MedicoUpdateInputObjectSchema, MedicoUncheckedUpdateInputObjectSchema]), where: MedicoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MedicoUpdateArgs>;

export const MedicoUpdateOneZodSchema = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), data: z.union([MedicoUpdateInputObjectSchema, MedicoUncheckedUpdateInputObjectSchema]), where: MedicoWhereUniqueInputObjectSchema }).strict();