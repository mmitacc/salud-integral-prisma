import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaIncludeObjectSchema as ConsultaIncludeObjectSchema } from './objects/ConsultaInclude.schema';
import { ConsultaOrderByWithRelationInputObjectSchema as ConsultaOrderByWithRelationInputObjectSchema } from './objects/ConsultaOrderByWithRelationInput.schema';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';
import { ConsultaScalarFieldEnumSchema } from './enums/ConsultaScalarFieldEnum.schema';
import { PacienteArgsObjectSchema as PacienteArgsObjectSchema } from './objects/PacienteArgs.schema';
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from './objects/UsuarioArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConsultaFindFirstSelectSchema: z.ZodType<Prisma.ConsultaSelect> = z.object({
    id: z.boolean().optional(),
    id_paciente: z.boolean().optional(),
    id_usuario: z.boolean().optional(),
    estado: z.boolean().optional(),
    citadate: z.boolean().optional(),
    costo: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
    usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ConsultaSelect>;

export const ConsultaFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    id_paciente: z.boolean().optional(),
    id_usuario: z.boolean().optional(),
    estado: z.boolean().optional(),
    citadate: z.boolean().optional(),
    costo: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
    usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional()
  }).strict();

export const ConsultaFindFirstSchema: z.ZodType<Prisma.ConsultaFindFirstArgs> = z.object({ select: ConsultaFindFirstSelectSchema.optional(), include: z.lazy(() => ConsultaIncludeObjectSchema.optional()), orderBy: z.union([ConsultaOrderByWithRelationInputObjectSchema, ConsultaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConsultaWhereInputObjectSchema.optional(), cursor: ConsultaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConsultaScalarFieldEnumSchema, ConsultaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaFindFirstArgs>;

export const ConsultaFindFirstZodSchema = z.object({ select: ConsultaFindFirstSelectSchema.optional(), include: z.lazy(() => ConsultaIncludeObjectSchema.optional()), orderBy: z.union([ConsultaOrderByWithRelationInputObjectSchema, ConsultaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConsultaWhereInputObjectSchema.optional(), cursor: ConsultaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConsultaScalarFieldEnumSchema, ConsultaScalarFieldEnumSchema.array()]).optional() }).strict();