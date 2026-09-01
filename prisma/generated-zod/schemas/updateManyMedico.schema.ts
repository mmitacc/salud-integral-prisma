import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoUpdateManyMutationInputObjectSchema as MedicoUpdateManyMutationInputObjectSchema } from './objects/MedicoUpdateManyMutationInput.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './objects/MedicoWhereInput.schema';

export const MedicoUpdateManySchema: z.ZodType<Prisma.MedicoUpdateManyArgs> = z.object({ data: MedicoUpdateManyMutationInputObjectSchema, where: MedicoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MedicoUpdateManyArgs>;

export const MedicoUpdateManyZodSchema = z.object({ data: MedicoUpdateManyMutationInputObjectSchema, where: MedicoWhereInputObjectSchema.optional() }).strict();