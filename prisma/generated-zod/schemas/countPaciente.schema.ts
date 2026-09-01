import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteOrderByWithRelationInputObjectSchema as PacienteOrderByWithRelationInputObjectSchema } from './objects/PacienteOrderByWithRelationInput.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './objects/PacienteWhereInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './objects/PacienteWhereUniqueInput.schema';
import { PacienteCountAggregateInputObjectSchema as PacienteCountAggregateInputObjectSchema } from './objects/PacienteCountAggregateInput.schema';

export const PacienteCountSchema: z.ZodType<Prisma.PacienteCountArgs> = z.object({ orderBy: z.union([PacienteOrderByWithRelationInputObjectSchema, PacienteOrderByWithRelationInputObjectSchema.array()]).optional(), where: PacienteWhereInputObjectSchema.optional(), cursor: PacienteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PacienteCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PacienteCountArgs>;

export const PacienteCountZodSchema = z.object({ orderBy: z.union([PacienteOrderByWithRelationInputObjectSchema, PacienteOrderByWithRelationInputObjectSchema.array()]).optional(), where: PacienteWhereInputObjectSchema.optional(), cursor: PacienteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PacienteCountAggregateInputObjectSchema ]).optional() }).strict();