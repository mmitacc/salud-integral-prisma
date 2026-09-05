import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from './objects/UsuarioOrderByWithRelationInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';
import { UsuarioCountAggregateInputObjectSchema as UsuarioCountAggregateInputObjectSchema } from './objects/UsuarioCountAggregateInput.schema';

export const UsuarioCountSchema: z.ZodType<Prisma.UsuarioCountArgs> = z.object({ orderBy: z.union([UsuarioOrderByWithRelationInputObjectSchema, UsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioWhereInputObjectSchema.optional(), cursor: UsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UsuarioCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioCountArgs>;

export const UsuarioCountZodSchema = z.object({ orderBy: z.union([UsuarioOrderByWithRelationInputObjectSchema, UsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioWhereInputObjectSchema.optional(), cursor: UsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UsuarioCountAggregateInputObjectSchema ]).optional() }).strict();