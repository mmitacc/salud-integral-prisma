import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { MedicoIncludeObjectSchema as MedicoIncludeObjectSchema } from './objects/MedicoInclude.schema';
import { MedicoOrderByWithRelationInputObjectSchema as MedicoOrderByWithRelationInputObjectSchema } from './objects/MedicoOrderByWithRelationInput.schema';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './objects/MedicoWhereInput.schema';
import { MedicoWhereUniqueInputObjectSchema as MedicoWhereUniqueInputObjectSchema } from './objects/MedicoWhereUniqueInput.schema';
import { MedicoScalarFieldEnumSchema } from './enums/MedicoScalarFieldEnum.schema';
import { EspecialidadArgsObjectSchema as EspecialidadArgsObjectSchema } from './objects/EspecialidadArgs.schema';
import { ConsultaFindManySchema } from './findManyConsulta.schema';
import { MedicoCountOutputTypeArgsObjectSchema as MedicoCountOutputTypeArgsObjectSchema } from './objects/MedicoCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MedicoFindManySelectSchema: z.ZodType<Prisma.MedicoSelect> = z.object({
    id: z.boolean().optional(),
    id_especialidad: z.boolean().optional(),
    nombres: z.boolean().optional(),
    apellidos: z.boolean().optional(),
    telefono: z.boolean().optional(),
    email: z.boolean().optional(),
    masculino: z.boolean().optional(),
    fechanacimiento: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    especialidad: z.union([z.boolean(), z.lazy(() => EspecialidadArgsObjectSchema)]).optional(),
    consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => MedicoCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.MedicoSelect>;

export const MedicoFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    id_especialidad: z.boolean().optional(),
    nombres: z.boolean().optional(),
    apellidos: z.boolean().optional(),
    telefono: z.boolean().optional(),
    email: z.boolean().optional(),
    masculino: z.boolean().optional(),
    fechanacimiento: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    especialidad: z.union([z.boolean(), z.lazy(() => EspecialidadArgsObjectSchema)]).optional(),
    consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => MedicoCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const MedicoFindManySchema: z.ZodType<Prisma.MedicoFindManyArgs> = z.object({ select: MedicoFindManySelectSchema.optional(), include: z.lazy(() => MedicoIncludeObjectSchema.optional()), orderBy: z.union([MedicoOrderByWithRelationInputObjectSchema, MedicoOrderByWithRelationInputObjectSchema.array()]).optional(), where: MedicoWhereInputObjectSchema.optional(), cursor: MedicoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MedicoScalarFieldEnumSchema, MedicoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MedicoFindManyArgs>;

export const MedicoFindManyZodSchema = z.object({ select: MedicoFindManySelectSchema.optional(), include: z.lazy(() => MedicoIncludeObjectSchema.optional()), orderBy: z.union([MedicoOrderByWithRelationInputObjectSchema, MedicoOrderByWithRelationInputObjectSchema.array()]).optional(), where: MedicoWhereInputObjectSchema.optional(), cursor: MedicoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MedicoScalarFieldEnumSchema, MedicoScalarFieldEnumSchema.array()]).optional() }).strict();