import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './objects/MedicoWhereInput.schema';

export const MedicoDeleteManySchema: z.ZodType<Prisma.MedicoDeleteManyArgs> = z.object({ where: MedicoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MedicoDeleteManyArgs>;

export const MedicoDeleteManyZodSchema = z.object({ where: MedicoWhereInputObjectSchema.optional() }).strict();