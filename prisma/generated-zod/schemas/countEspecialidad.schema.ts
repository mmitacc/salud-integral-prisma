import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadOrderByWithRelationInputObjectSchema as EspecialidadOrderByWithRelationInputObjectSchema } from './objects/EspecialidadOrderByWithRelationInput.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './objects/EspecialidadWhereInput.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './objects/EspecialidadWhereUniqueInput.schema';
import { EspecialidadCountAggregateInputObjectSchema as EspecialidadCountAggregateInputObjectSchema } from './objects/EspecialidadCountAggregateInput.schema';

export const EspecialidadCountSchema: z.ZodType<Prisma.EspecialidadCountArgs> = z.object({ orderBy: z.union([EspecialidadOrderByWithRelationInputObjectSchema, EspecialidadOrderByWithRelationInputObjectSchema.array()]).optional(), where: EspecialidadWhereInputObjectSchema.optional(), cursor: EspecialidadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EspecialidadCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EspecialidadCountArgs>;

export const EspecialidadCountZodSchema = z.object({ orderBy: z.union([EspecialidadOrderByWithRelationInputObjectSchema, EspecialidadOrderByWithRelationInputObjectSchema.array()]).optional(), where: EspecialidadWhereInputObjectSchema.optional(), cursor: EspecialidadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EspecialidadCountAggregateInputObjectSchema ]).optional() }).strict();