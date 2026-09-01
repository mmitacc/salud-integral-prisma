import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialIncludeObjectSchema as HistorialIncludeObjectSchema } from './objects/HistorialInclude.schema';
import { HistorialOrderByWithRelationInputObjectSchema as HistorialOrderByWithRelationInputObjectSchema } from './objects/HistorialOrderByWithRelationInput.schema';
import { HistorialWhereInputObjectSchema as HistorialWhereInputObjectSchema } from './objects/HistorialWhereInput.schema';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './objects/HistorialWhereUniqueInput.schema';
import { HistorialScalarFieldEnumSchema } from './enums/HistorialScalarFieldEnum.schema';
import { PacienteArgsObjectSchema as PacienteArgsObjectSchema } from './objects/PacienteArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HistorialFindFirstSelectSchema: z.ZodType<Prisma.HistorialSelect> = z.object({
    id: z.boolean().optional(),
    id_paciente: z.boolean().optional(),
    fecha: z.boolean().optional(),
    motivo: z.boolean().optional(),
    antecedentes: z.boolean().optional(),
    triaje: z.boolean().optional(),
    diagnostico: z.boolean().optional(),
    tratamiento: z.boolean().optional(),
    receta: z.boolean().optional(),
    paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.HistorialSelect>;

export const HistorialFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    id_paciente: z.boolean().optional(),
    fecha: z.boolean().optional(),
    motivo: z.boolean().optional(),
    antecedentes: z.boolean().optional(),
    triaje: z.boolean().optional(),
    diagnostico: z.boolean().optional(),
    tratamiento: z.boolean().optional(),
    receta: z.boolean().optional(),
    paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional()
  }).strict();

export const HistorialFindFirstSchema: z.ZodType<Prisma.HistorialFindFirstArgs> = z.object({ select: HistorialFindFirstSelectSchema.optional(), include: z.lazy(() => HistorialIncludeObjectSchema.optional()), orderBy: z.union([HistorialOrderByWithRelationInputObjectSchema, HistorialOrderByWithRelationInputObjectSchema.array()]).optional(), where: HistorialWhereInputObjectSchema.optional(), cursor: HistorialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HistorialScalarFieldEnumSchema, HistorialScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.HistorialFindFirstArgs>;

export const HistorialFindFirstZodSchema = z.object({ select: HistorialFindFirstSelectSchema.optional(), include: z.lazy(() => HistorialIncludeObjectSchema.optional()), orderBy: z.union([HistorialOrderByWithRelationInputObjectSchema, HistorialOrderByWithRelationInputObjectSchema.array()]).optional(), where: HistorialWhereInputObjectSchema.optional(), cursor: HistorialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HistorialScalarFieldEnumSchema, HistorialScalarFieldEnumSchema.array()]).optional() }).strict();