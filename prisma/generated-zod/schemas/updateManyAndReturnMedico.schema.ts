import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoSelectObjectSchema as MedicoSelectObjectSchema } from './objects/MedicoSelect.schema';
import { MedicoUpdateManyMutationInputObjectSchema as MedicoUpdateManyMutationInputObjectSchema } from './objects/MedicoUpdateManyMutationInput.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './objects/MedicoWhereInput.schema';

export const MedicoUpdateManyAndReturnSchema: z.ZodType<Prisma.MedicoUpdateManyAndReturnArgs> = z.object({ select: MedicoSelectObjectSchema.optional(), data: MedicoUpdateManyMutationInputObjectSchema, where: MedicoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MedicoUpdateManyAndReturnArgs>;

export const MedicoUpdateManyAndReturnZodSchema = z.object({ select: MedicoSelectObjectSchema.optional(), data: MedicoUpdateManyMutationInputObjectSchema, where: MedicoWhereInputObjectSchema.optional() }).strict();