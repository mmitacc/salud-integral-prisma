import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './objects/PacienteInclude.schema';
import { PacienteOrderByWithRelationInputObjectSchema as PacienteOrderByWithRelationInputObjectSchema } from './objects/PacienteOrderByWithRelationInput.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './objects/PacienteWhereInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './objects/PacienteWhereUniqueInput.schema';
import { PacienteScalarFieldEnumSchema } from './enums/PacienteScalarFieldEnum.schema';
import { HistorialFindManySchema } from './findManyHistorial.schema';
import { CitaFindManySchema } from './findManyCita.schema';
import { PacienteCountOutputTypeArgsObjectSchema as PacienteCountOutputTypeArgsObjectSchema } from './objects/PacienteCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PacienteFindFirstSelectSchema: z.ZodType<Prisma.PacienteSelect> = z.object({
    id: z.boolean().optional(),
    nombres: z.boolean().optional(),
    apellidos: z.boolean().optional(),
    telefono: z.boolean().optional(),
    email: z.boolean().optional(),
    masculino: z.boolean().optional(),
    fecha_nac: z.boolean().optional(),
    tipo_sangre: z.boolean().optional(),
    alergias: z.boolean().optional(),
    historiales: z.union([z.boolean(), z.lazy(() => HistorialFindManySchema)]).optional(),
    citas: z.union([z.boolean(), z.lazy(() => CitaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.PacienteSelect>;

export const PacienteFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    nombres: z.boolean().optional(),
    apellidos: z.boolean().optional(),
    telefono: z.boolean().optional(),
    email: z.boolean().optional(),
    masculino: z.boolean().optional(),
    fecha_nac: z.boolean().optional(),
    tipo_sangre: z.boolean().optional(),
    alergias: z.boolean().optional(),
    historiales: z.union([z.boolean(), z.lazy(() => HistorialFindManySchema)]).optional(),
    citas: z.union([z.boolean(), z.lazy(() => CitaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PacienteCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const PacienteFindFirstSchema: z.ZodType<Prisma.PacienteFindFirstArgs> = z.object({ select: PacienteFindFirstSelectSchema.optional(), include: z.lazy(() => PacienteIncludeObjectSchema.optional()), orderBy: z.union([PacienteOrderByWithRelationInputObjectSchema, PacienteOrderByWithRelationInputObjectSchema.array()]).optional(), where: PacienteWhereInputObjectSchema.optional(), cursor: PacienteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PacienteScalarFieldEnumSchema, PacienteScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PacienteFindFirstArgs>;

export const PacienteFindFirstZodSchema = z.object({ select: PacienteFindFirstSelectSchema.optional(), include: z.lazy(() => PacienteIncludeObjectSchema.optional()), orderBy: z.union([PacienteOrderByWithRelationInputObjectSchema, PacienteOrderByWithRelationInputObjectSchema.array()]).optional(), where: PacienteWhereInputObjectSchema.optional(), cursor: PacienteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PacienteScalarFieldEnumSchema, PacienteScalarFieldEnumSchema.array()]).optional() }).strict();