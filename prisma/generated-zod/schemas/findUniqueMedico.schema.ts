import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoSelectObjectSchema as MedicoSelectObjectSchema } from './objects/MedicoSelect.schema';
import { MedicoIncludeObjectSchema as MedicoIncludeObjectSchema } from './objects/MedicoInclude.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './objects/MedicoWhereUniqueInput.schema';

export const MedicoFindUniqueSchema: z.ZodType<Prisma.MedicoFindUniqueArgs> = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), where: MedicoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MedicoFindUniqueArgs>;

export const MedicoFindUniqueZodSchema = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), where: MedicoWhereUniqueInputObjectSchema }).strict();