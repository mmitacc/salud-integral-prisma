import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './objects/CitaWhereInput.schema';
import { CitaOrderByWithAggregationInputObjectSchema as CitaOrderByWithAggregationInputObjectSchema } from './objects/CitaOrderByWithAggregationInput.schema';
import { CitaScalarWhereWithAggregatesInputObjectSchema as CitaScalarWhereWithAggregatesInputObjectSchema } from './objects/CitaScalarWhereWithAggregatesInput.schema';
import { CitaScalarFieldEnumSchema } from './enums/CitaScalarFieldEnum.schema';
import { CitaCountAggregateInputObjectSchema as CitaCountAggregateInputObjectSchema } from './objects/CitaCountAggregateInput.schema';
import { CitaMinAggregateInputObjectSchema as CitaMinAggregateInputObjectSchema } from './objects/CitaMinAggregateInput.schema';
import { CitaMaxAggregateInputObjectSchema as CitaMaxAggregateInputObjectSchema } from './objects/CitaMaxAggregateInput.schema';
import { CitaAvgAggregateInputObjectSchema as CitaAvgAggregateInputObjectSchema } from './objects/CitaAvgAggregateInput.schema';
import { CitaSumAggregateInputObjectSchema as CitaSumAggregateInputObjectSchema } from './objects/CitaSumAggregateInput.schema';

export const CitaGroupBySchema: z.ZodType<Prisma.CitaGroupByArgs> = z.object({ where: CitaWhereInputObjectSchema.optional(), orderBy: z.union([CitaOrderByWithAggregationInputObjectSchema, CitaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CitaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CitaScalarFieldEnumSchema), _count: z.union([ z.literal(true), CitaCountAggregateInputObjectSchema ]).optional(), _min: CitaMinAggregateInputObjectSchema.optional(), _max: CitaMaxAggregateInputObjectSchema.optional(), _avg: CitaAvgAggregateInputObjectSchema.optional(), _sum: CitaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CitaGroupByArgs>;

export const CitaGroupByZodSchema = z.object({ where: CitaWhereInputObjectSchema.optional(), orderBy: z.union([CitaOrderByWithAggregationInputObjectSchema, CitaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CitaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CitaScalarFieldEnumSchema), _count: z.union([ z.literal(true), CitaCountAggregateInputObjectSchema ]).optional(), _min: CitaMinAggregateInputObjectSchema.optional(), _max: CitaMaxAggregateInputObjectSchema.optional(), _avg: CitaAvgAggregateInputObjectSchema.optional(), _sum: CitaSumAggregateInputObjectSchema.optional() }).strict();