import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialOrderByWithRelationInputObjectSchema as HistorialOrderByWithRelationInputObjectSchema } from './objects/HistorialOrderByWithRelationInput.schema';
import { HistorialWhereInputObjectSchema as HistorialWhereInputObjectSchema } from './objects/HistorialWhereInput.schema';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './objects/HistorialWhereUniqueInput.schema';
import { HistorialCountAggregateInputObjectSchema as HistorialCountAggregateInputObjectSchema } from './objects/HistorialCountAggregateInput.schema';

export const HistorialCountSchema: z.ZodType<Prisma.HistorialCountArgs> = z.object({ orderBy: z.union([HistorialOrderByWithRelationInputObjectSchema, HistorialOrderByWithRelationInputObjectSchema.array()]).optional(), where: HistorialWhereInputObjectSchema.optional(), cursor: HistorialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HistorialCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.HistorialCountArgs>;

export const HistorialCountZodSchema = z.object({ orderBy: z.union([HistorialOrderByWithRelationInputObjectSchema, HistorialOrderByWithRelationInputObjectSchema.array()]).optional(), where: HistorialWhereInputObjectSchema.optional(), cursor: HistorialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HistorialCountAggregateInputObjectSchema ]).optional() }).strict();