import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { ConsultaIncludeObjectSchema as ConsultaIncludeObjectSchema } from './objects/ConsultaInclude.schema';
import { ConsultaOrderByWithRelationInputObjectSchema as ConsultaOrderByWithRelationInputObjectSchema } from './objects/ConsultaOrderByWithRelationInput.schema';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';
import { ConsultaWhereUniqueInputObjectSchema as ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';
import { ConsultaScalarFieldEnumSchema } from './enums/ConsultaScalarFieldEnum.schema';
import { CitaArgsObjectSchema as CitaArgsObjectSchema } from './objects/CitaArgs.schema';
import { MedicoArgsObjectSchema as MedicoArgsObjectSchema } from './objects/MedicoArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConsultaFindManySelectSchema: z.ZodType<Prisma.ConsultaSelect> = z.object({
    id: z.boolean().optional(),
    idCita: z.boolean().optional(),
    idMedico: z.boolean().optional(),
    fecha: z.boolean().optional(),
    horario: z.boolean().optional(),
    costo: z.boolean().optional(),
    creado: z.boolean().optional(),
    cita: z.union([z.boolean(), z.lazy(() => CitaArgsObjectSchema)]).optional(),
    medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ConsultaSelect>;

export const ConsultaFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    idCita: z.boolean().optional(),
    idMedico: z.boolean().optional(),
    fecha: z.boolean().optional(),
    horario: z.boolean().optional(),
    costo: z.boolean().optional(),
    creado: z.boolean().optional(),
    cita: z.union([z.boolean(), z.lazy(() => CitaArgsObjectSchema)]).optional(),
    medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
  }).strict();

export const ConsultaFindManySchema: z.ZodType<Prisma.ConsultaFindManyArgs> = z.object({ select: ConsultaFindManySelectSchema.optional(), include: z.lazy(() => ConsultaIncludeObjectSchema.optional()), orderBy: z.union([ConsultaOrderByWithRelationInputObjectSchema, ConsultaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConsultaWhereInputObjectSchema.optional(), cursor: ConsultaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConsultaScalarFieldEnumSchema, ConsultaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaFindManyArgs>;

export const ConsultaFindManyZodSchema = z.object({ select: ConsultaFindManySelectSchema.optional(), include: z.lazy(() => ConsultaIncludeObjectSchema.optional()), orderBy: z.union([ConsultaOrderByWithRelationInputObjectSchema, ConsultaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConsultaWhereInputObjectSchema.optional(), cursor: ConsultaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConsultaScalarFieldEnumSchema, ConsultaScalarFieldEnumSchema.array()]).optional() }).strict();