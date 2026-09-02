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

export const ConsultaFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ConsultaSelect> = z.object({
    id: z.boolean().optional(),
    id_cita: z.boolean().optional(),
    id_medico: z.boolean().optional(),
    fecha: z.boolean().optional(),
    horario: z.boolean().optional(),
    costo: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    cita: z.union([z.boolean(), z.lazy(() => CitaArgsObjectSchema)]).optional(),
    medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ConsultaSelect>;

export const ConsultaFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    id_cita: z.boolean().optional(),
    id_medico: z.boolean().optional(),
    fecha: z.boolean().optional(),
    horario: z.boolean().optional(),
    costo: z.boolean().optional(),
    registerdate: z.boolean().optional(),
    deleted: z.boolean().optional(),
    cita: z.union([z.boolean(), z.lazy(() => CitaArgsObjectSchema)]).optional(),
    medico: z.union([z.boolean(), z.lazy(() => MedicoArgsObjectSchema)]).optional()
  }).strict();

export const ConsultaFindFirstOrThrowSchema: z.ZodType<Prisma.ConsultaFindFirstOrThrowArgs> = z.object({ select: ConsultaFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ConsultaIncludeObjectSchema.optional()), orderBy: z.union([ConsultaOrderByWithRelationInputObjectSchema, ConsultaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConsultaWhereInputObjectSchema.optional(), cursor: ConsultaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConsultaScalarFieldEnumSchema, ConsultaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ConsultaFindFirstOrThrowArgs>;

export const ConsultaFindFirstOrThrowZodSchema = z.object({ select: ConsultaFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ConsultaIncludeObjectSchema.optional()), orderBy: z.union([ConsultaOrderByWithRelationInputObjectSchema, ConsultaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConsultaWhereInputObjectSchema.optional(), cursor: ConsultaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConsultaScalarFieldEnumSchema, ConsultaScalarFieldEnumSchema.array()]).optional() }).strict();