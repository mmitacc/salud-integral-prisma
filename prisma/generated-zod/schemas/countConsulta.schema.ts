import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaOrderByWithRelationInputObjectSchema as ConsultaOrderByWithRelationInputObjectSchema } from './objects/ConsultaOrderByWithRelationInput.schema';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';
import { ConsultaCountAggregateInputObjectSchema as ConsultaCountAggregateInputObjectSchema } from './objects/ConsultaCountAggregateInput.schema';

export const ConsultaCountSchema: z.ZodType<Prisma.ConsultaCountArgs> = z.object({ orderBy: z.union([ConsultaOrderByWithRelationInputObjectSchema, ConsultaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConsultaWhereInputObjectSchema.optional(), cursor: ConsultaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ConsultaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaCountArgs>;

export const ConsultaCountZodSchema = z.object({ orderBy: z.union([ConsultaOrderByWithRelationInputObjectSchema, ConsultaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConsultaWhereInputObjectSchema.optional(), cursor: ConsultaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ConsultaCountAggregateInputObjectSchema ]).optional() }).strict();