import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './objects/PacienteSelect.schema';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './objects/PacienteInclude.schema';
import { PacienteUpdateInputObjectSchema as PacienteUpdateInputObjectSchema } from './objects/PacienteUpdateInput.schema';
import { PacienteUncheckedUpdateInputObjectSchema as PacienteUncheckedUpdateInputObjectSchema } from './objects/PacienteUncheckedUpdateInput.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './objects/PacienteWhereUniqueInput.schema';

export const PacienteUpdateOneSchema: z.ZodType<Prisma.PacienteUpdateArgs> = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), data: z.union([PacienteUpdateInputObjectSchema, PacienteUncheckedUpdateInputObjectSchema]), where: PacienteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PacienteUpdateArgs>;

export const PacienteUpdateOneZodSchema = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), data: z.union([PacienteUpdateInputObjectSchema, PacienteUncheckedUpdateInputObjectSchema]), where: PacienteWhereUniqueInputObjectSchema }).strict();