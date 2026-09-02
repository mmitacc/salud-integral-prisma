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

export const CitaFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CitaSelect> = z.object({
    id: z.boolean().optional(),
    id_paciente: z.boolean().optional(),
    estado: z.boolean().optional(),
    pagoinicial: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
    consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CitaCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.CitaSelect>;

export const CitaFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    id_paciente: z.boolean().optional(),
    estado: z.boolean().optional(),
    pagoinicial: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    paciente: z.union([z.boolean(), z.lazy(() => PacienteArgsObjectSchema)]).optional(),
    consultas: z.union([z.boolean(), z.lazy(() => ConsultaFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CitaCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const CitaFindFirstOrThrowSchema: z.ZodType<Prisma.CitaFindFirstOrThrowArgs> = z.object({ select: CitaFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CitaIncludeObjectSchema.optional()), orderBy: z.union([CitaOrderByWithRelationInputObjectSchema, CitaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CitaWhereInputObjectSchema.optional(), cursor: CitaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CitaScalarFieldEnumSchema, CitaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CitaFindFirstOrThrowArgs>;

export const CitaFindFirstOrThrowZodSchema = z.object({ select: CitaFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CitaIncludeObjectSchema.optional()), orderBy: z.union([CitaOrderByWithRelationInputObjectSchema, CitaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CitaWhereInputObjectSchema.optional(), cursor: CitaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CitaScalarFieldEnumSchema, CitaScalarFieldEnumSchema.array()]).optional() }).strict();