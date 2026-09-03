import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './objects/PacienteInclude.schema';
import { PacienteOrderByWithRelationInputObjectSchema as PacienteOrderByWithRelationInputObjectSchema } from './objects/PacienteOrderByWithRelationInput.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './objects/PacienteWhereInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './objects/PacienteWhereUniqueInput.schema';
import { PacienteScalarFieldEnumSchema } from './enums/PacienteScalarFieldEnum.schema';
import { HistorialFindManySchema } from './findManyHistorial.schema';
import { ConsultaFindManySchema } from './findManyConsulta.schema';
import { PacienteCountOutputTypeArgsObjectSchema as PacienteCountOutputTypeArgsObjectSchema } from './objects/PacienteCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PacienteFindManySelectSchema: z.ZodType<Prisma.PacienteSelect> = z.object({
    id: z.boolean().optional(),
    nombres: z.boolean().optional(),
    apellidos: z.boolean().optional(),
    telefono: z.boolean().optional(),
    email: z.boolean().optional(),
    masculino: z.boolean().optional(),
    fechanacimiento: z.boolean().optional(),
    tiposangre: z.boolean().optional(),
    alergias: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    historiales: z.union([z.boolean(), z.lazy(() => HistorialFindManySchema)]).optional(),
    consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.PacienteSelect>;

export const PacienteFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    nombres: z.boolean().optional(),
    apellidos: z.boolean().optional(),
    telefono: z.boolean().optional(),
    email: z.boolean().optional(),
    masculino: z.boolean().optional(),
    fechanacimiento: z.boolean().optional(),
    tiposangre: z.boolean().optional(),
    alergias: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    historiales: z.union([z.boolean(), z.lazy(() => HistorialFindManySchema)]).optional(),
    consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const PacienteFindManySchema: z.ZodType<Prisma.PacienteFindManyArgs> = z.object({ select: PacienteFindManySelectSchema.optional(), include: z.lazy(() => PacienteIncludeObjectSchema.optional()), orderBy: z.union([PacienteOrderByWithRelationInputObjectSchema, PacienteOrderByWithRelationInputObjectSchema.array()]).optional(), where: PacienteWhereInputObjectSchema.optional(), cursor: PacienteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PacienteScalarFieldEnumSchema, PacienteScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PacienteFindManyArgs>;

export const PacienteFindManyZodSchema = z.object({ select: PacienteFindManySelectSchema.optional(), include: z.lazy(() => PacienteIncludeObjectSchema.optional()), orderBy: z.union([PacienteOrderByWithRelationInputObjectSchema, PacienteOrderByWithRelationInputObjectSchema.array()]).optional(), where: PacienteWhereInputObjectSchema.optional(), cursor: PacienteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PacienteScalarFieldEnumSchema, PacienteScalarFieldEnumSchema.array()]).optional() }).strict();