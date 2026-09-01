import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaOrderByWithRelationInputObjectSchema as CitaOrderByWithRelationInputObjectSchema } from './objects/CitaOrderByWithRelationInput.schema';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './objects/CitaWhereInput.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './objects/CitaWhereUniqueInput.schema';
import { CitaCountAggregateInputObjectSchema as CitaCountAggregateInputObjectSchema } from './objects/CitaCountAggregateInput.schema';

export const CitaCountSchema: z.ZodType<Prisma.CitaCountArgs> = z.object({ orderBy: z.union([CitaOrderByWithRelationInputObjectSchema, CitaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CitaWhereInputObjectSchema.optional(), cursor: CitaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CitaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CitaCountArgs>;

export const CitaCountZodSchema = z.object({ orderBy: z.union([CitaOrderByWithRelationInputObjectSchema, CitaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CitaWhereInputObjectSchema.optional(), cursor: CitaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CitaCountAggregateInputObjectSchema ]).optional() }).strict();