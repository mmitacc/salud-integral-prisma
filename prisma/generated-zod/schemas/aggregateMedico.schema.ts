import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoOrderByWithRelationInputObjectSchema as MedicoOrderByWithRelationInputObjectSchema } from './objects/MedicoOrderByWithRelationInput.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './objects/MedicoWhereInput.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './objects/MedicoWhereUniqueInput.schema';
import { MedicoCountAggregateInputObjectSchema as MedicoCountAggregateInputObjectSchema } from './objects/MedicoCountAggregateInput.schema';
import { MedicoMinAggregateInputObjectSchema as MedicoMinAggregateInputObjectSchema } from './objects/MedicoMinAggregateInput.schema';
import { MedicoMaxAggregateInputObjectSchema as MedicoMaxAggregateInputObjectSchema } from './objects/MedicoMaxAggregateInput.schema';
import { MedicoAvgAggregateInputObjectSchema as MedicoAvgAggregateInputObjectSchema } from './objects/MedicoAvgAggregateInput.schema';
import { MedicoSumAggregateInputObjectSchema as MedicoSumAggregateInputObjectSchema } from './objects/MedicoSumAggregateInput.schema';

export const MedicoAggregateSchema: z.ZodType<Prisma.MedicoAggregateArgs> = z.object({ orderBy: z.union([MedicoOrderByWithRelationInputObjectSchema, MedicoOrderByWithRelationInputObjectSchema.array()]).optional(), where: MedicoWhereInputObjectSchema.optional(), cursor: MedicoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MedicoCountAggregateInputObjectSchema ]).optional(), _min: MedicoMinAggregateInputObjectSchema.optional(), _max: MedicoMaxAggregateInputObjectSchema.optional(), _avg: MedicoAvgAggregateInputObjectSchema.optional(), _sum: MedicoSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MedicoAggregateArgs>;

export const MedicoAggregateZodSchema = z.object({ orderBy: z.union([MedicoOrderByWithRelationInputObjectSchema, MedicoOrderByWithRelationInputObjectSchema.array()]).optional(), where: MedicoWhereInputObjectSchema.optional(), cursor: MedicoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MedicoCountAggregateInputObjectSchema ]).optional(), _min: MedicoMinAggregateInputObjectSchema.optional(), _max: MedicoMaxAggregateInputObjectSchema.optional(), _avg: MedicoAvgAggregateInputObjectSchema.optional(), _sum: MedicoSumAggregateInputObjectSchema.optional() }).strict();