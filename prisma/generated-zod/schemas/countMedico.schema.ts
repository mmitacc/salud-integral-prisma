import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoOrderByWithRelationInputObjectSchema as MedicoOrderByWithRelationInputObjectSchema } from './objects/MedicoOrderByWithRelationInput.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './objects/MedicoWhereInput.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './objects/MedicoWhereUniqueInput.schema';
import { MedicoCountAggregateInputObjectSchema as MedicoCountAggregateInputObjectSchema } from './objects/MedicoCountAggregateInput.schema';

export const MedicoCountSchema: z.ZodType<Prisma.MedicoCountArgs> = z.object({ orderBy: z.union([MedicoOrderByWithRelationInputObjectSchema, MedicoOrderByWithRelationInputObjectSchema.array()]).optional(), where: MedicoWhereInputObjectSchema.optional(), cursor: MedicoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MedicoCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MedicoCountArgs>;

export const MedicoCountZodSchema = z.object({ orderBy: z.union([MedicoOrderByWithRelationInputObjectSchema, MedicoOrderByWithRelationInputObjectSchema.array()]).optional(), where: MedicoWhereInputObjectSchema.optional(), cursor: MedicoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MedicoCountAggregateInputObjectSchema ]).optional() }).strict();