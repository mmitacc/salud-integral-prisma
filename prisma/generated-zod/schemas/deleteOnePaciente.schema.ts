import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './objects/PacienteSelect.schema';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './objects/PacienteInclude.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './objects/PacienteWhereUniqueInput.schema';

export const PacienteDeleteOneSchema: z.ZodType<Prisma.PacienteDeleteArgs> = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), where: PacienteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PacienteDeleteArgs>;

export const PacienteDeleteOneZodSchema = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), where: PacienteWhereUniqueInputObjectSchema }).strict();