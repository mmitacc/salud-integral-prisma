import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from './objects/UsuarioInclude.schema';
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from './objects/UsuarioOrderByWithRelationInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';
import { UsuarioScalarFieldEnumSchema } from './enums/UsuarioScalarFieldEnum.schema';
import { MedicoArgsObjectSchema as MedicoArgsObjectSchema } from './objects/MedicoArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsuarioFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UsuarioSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    role: z.boolean().optional(),
    username: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.UsuarioSelect>;

export const UsuarioFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    role: z.boolean().optional(),
    username: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
  }).strict();

export const UsuarioFindFirstOrThrowSchema: z.ZodType<Prisma.UsuarioFindFirstOrThrowArgs> = z.object({ select: UsuarioFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UsuarioIncludeObjectSchema.optional()), orderBy: z.union([UsuarioOrderByWithRelationInputObjectSchema, UsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioWhereInputObjectSchema.optional(), cursor: UsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsuarioScalarFieldEnumSchema, UsuarioScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioFindFirstOrThrowArgs>;

export const UsuarioFindFirstOrThrowZodSchema = z.object({ select: UsuarioFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UsuarioIncludeObjectSchema.optional()), orderBy: z.union([UsuarioOrderByWithRelationInputObjectSchema, UsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: UsuarioWhereInputObjectSchema.optional(), cursor: UsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsuarioScalarFieldEnumSchema, UsuarioScalarFieldEnumSchema.array()]).optional() }).strict();