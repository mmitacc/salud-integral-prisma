import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaIncludeObjectSchema as CitaIncludeObjectSchema } from './objects/CitaInclude.schema';
import { CitaOrderByWithRelationInputObjectSchema as CitaOrderByWithRelationInputObjectSchema } from './objects/CitaOrderByWithRelationInput.schema';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './objects/CitaWhereInput.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './objects/CitaWhereUniqueInput.schema';
import { CitaScalarFieldEnumSchema } from './enums/CitaScalarFieldEnum.schema';
import { PacienteArgsObjectSchema as PacienteArgsObjectSchema } from './objects/PacienteArgs.schema';
import { ConsultaFindManySchema } from './findManyConsulta.schema';
import { CitaCountOutputTypeArgsObjectSchema as CitaCountOutputTypeArgsObjectSchema } from './objects/CitaCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CitaFindManySelectSchema: z.ZodType<Prisma.CitaSelect> = z.object({
    id: z.boolean().optional(),
    id_paciente: z.boolean().optional(),
    fecha: z.boolean().optional(),
    estado: z.boolean().optional(),
    paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
    consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CitaCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.CitaSelect>;

export const CitaFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    id_paciente: z.boolean().optional(),
    fecha: z.boolean().optional(),
    estado: z.boolean().optional(),
    paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
    consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CitaCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const CitaFindManySchema: z.ZodType<Prisma.CitaFindManyArgs> = z.object({ select: CitaFindManySelectSchema.optional(), include: z.lazy(() => CitaIncludeObjectSchema.optional()), orderBy: z.union([CitaOrderByWithRelationInputObjectSchema, CitaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CitaWhereInputObjectSchema.optional(), cursor: CitaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CitaScalarFieldEnumSchema, CitaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CitaFindManyArgs>;

export const CitaFindManyZodSchema = z.object({ select: CitaFindManySelectSchema.optional(), include: z.lazy(() => CitaIncludeObjectSchema.optional()), orderBy: z.union([CitaOrderByWithRelationInputObjectSchema, CitaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CitaWhereInputObjectSchema.optional(), cursor: CitaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CitaScalarFieldEnumSchema, CitaScalarFieldEnumSchema.array()]).optional() }).strict();