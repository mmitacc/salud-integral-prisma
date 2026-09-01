import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoSelectObjectSchema as MedicoSelectObjectSchema } from './objects/MedicoSelect.schema';
import { MedicoIncludeObjectSchema as MedicoIncludeObjectSchema } from './objects/MedicoInclude.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './objects/MedicoWhereUniqueInput.schema';

export const MedicoFindUniqueOrThrowSchema: z.ZodType<Prisma.MedicoFindUniqueOrThrowArgs> = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), where: MedicoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MedicoFindUniqueOrThrowArgs>;

export const MedicoFindUniqueOrThrowZodSchema = z.object({ select: MedicoSelectObjectSchema.optional(), include: MedicoIncludeObjectSchema.optional(), where: MedicoWhereUniqueInputObjectSchema }).strict();