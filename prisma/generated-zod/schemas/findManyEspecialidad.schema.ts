import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { EspecialidadIncludeObjectSchema as EspecialidadIncludeObjectSchema } from './objects/EspecialidadInclude.schema';
import { EspecialidadOrderByWithRelationInputObjectSchema as EspecialidadOrderByWithRelationInputObjectSchema } from './objects/EspecialidadOrderByWithRelationInput.schema';
import { EspecialidadWhereInputObjectSchema as EspecialidadWhereInputObjectSchema } from './objects/EspecialidadWhereInput.schema';
import { EspecialidadWhereUniqueInputObjectSchema as EspecialidadWhereUniqueInputObjectSchema } from './objects/EspecialidadWhereUniqueInput.schema';
import { EspecialidadScalarFieldEnumSchema } from './enums/EspecialidadScalarFieldEnum.schema';
import { MedicoFindManySchema } from './findManyMedico.schema';
import { EspecialidadCountOutputTypeArgsObjectSchema as EspecialidadCountOutputTypeArgsObjectSchema } from './objects/EspecialidadCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EspecialidadFindManySelectSchema: z.ZodType<Prisma.EspecialidadSelect> = z.object({
    id: z.boolean().optional(),
    tipo: z.boolean().optional(),
    medicos: z.union([z.boolean(), z.lazy(() => MedicoFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => EspecialidadCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.EspecialidadSelect>;

export const EspecialidadFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    tipo: z.boolean().optional(),
    medicos: z.union([z.boolean(), z.lazy(() => MedicoFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => EspecialidadCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const EspecialidadFindManySchema: z.ZodType<Prisma.EspecialidadFindManyArgs> = z.object({ select: EspecialidadFindManySelectSchema.optional(), include: z.lazy(() => EspecialidadIncludeObjectSchema.optional()), orderBy: z.union([EspecialidadOrderByWithRelationInputObjectSchema, EspecialidadOrderByWithRelationInputObjectSchema.array()]).optional(), where: EspecialidadWhereInputObjectSchema.optional(), cursor: EspecialidadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EspecialidadScalarFieldEnumSchema, EspecialidadScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EspecialidadFindManyArgs>;

export const EspecialidadFindManyZodSchema = z.object({ select: EspecialidadFindManySelectSchema.optional(), include: z.lazy(() => EspecialidadIncludeObjectSchema.optional()), orderBy: z.union([EspecialidadOrderByWithRelationInputObjectSchema, EspecialidadOrderByWithRelationInputObjectSchema.array()]).optional(), where: EspecialidadWhereInputObjectSchema.optional(), cursor: EspecialidadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EspecialidadScalarFieldEnumSchema, EspecialidadScalarFieldEnumSchema.array()]).optional() }).strict();