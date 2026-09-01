import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaOrderByWithRelationInputObjectSchema as CitaOrderByWithRelationInputObjectSchema } from './objects/CitaOrderByWithRelationInput.schema';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './objects/CitaWhereInput.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './objects/CitaWhereUniqueInput.schema';
import { CitaCountAggregateInputObjectSchema as CitaCountAggregateInputObjectSchema } from './objects/CitaCountAggregateInput.schema';
import { CitaMinAggregateInputObjectSchema as CitaMinAggregateInputObjectSchema } from './objects/CitaMinAggregateInput.schema';
import { CitaMaxAggregateInputObjectSchema as CitaMaxAggregateInputObjectSchema } from './objects/CitaMaxAggregateInput.schema';
import { CitaAvgAggregateInputObjectSchema as CitaAvgAggregateInputObjectSchema } from './objects/CitaAvgAggregateInput.schema';
import { CitaSumAggregateInputObjectSchema as CitaSumAggregateInputObjectSchema } from './objects/CitaSumAggregateInput.schema';

export const CitaAggregateSchema: z.ZodType<Prisma.CitaAggregateArgs> = z.object({ orderBy: z.union([CitaOrderByWithRelationInputObjectSchema, CitaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CitaWhereInputObjectSchema.optional(), cursor: CitaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CitaCountAggregateInputObjectSchema ]).optional(), _min: CitaMinAggregateInputObjectSchema.optional(), _max: CitaMaxAggregateInputObjectSchema.optional(), _avg: CitaAvgAggregateInputObjectSchema.optional(), _sum: CitaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CitaAggregateArgs>;

export const CitaAggregateZodSchema = z.object({ orderBy: z.union([CitaOrderByWithRelationInputObjectSchema, CitaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CitaWhereInputObjectSchema.optional(), cursor: CitaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CitaCountAggregateInputObjectSchema ]).optional(), _min: CitaMinAggregateInputObjectSchema.optional(), _max: CitaMaxAggregateInputObjectSchema.optional(), _avg: CitaAvgAggregateInputObjectSchema.optional(), _sum: CitaSumAggregateInputObjectSchema.optional() }).strict();