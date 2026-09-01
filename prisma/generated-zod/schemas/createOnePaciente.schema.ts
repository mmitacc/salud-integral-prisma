import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './objects/PacienteSelect.schema';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './objects/PacienteInclude.schema';
import { PacienteCreateInputObjectSchema as PacienteCreateInputObjectSchema } from './objects/PacienteCreateInput.schema';
import { PacienteUncheckedCreateInputObjectSchema as PacienteUncheckedCreateInputObjectSchema } from './objects/PacienteUncheckedCreateInput.schema';

export const PacienteCreateOneSchema: z.ZodType<Prisma.PacienteCreateArgs> = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), data: z.union([PacienteCreateInputObjectSchema, PacienteUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PacienteCreateArgs>;

export const PacienteCreateOneZodSchema = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), data: z.union([PacienteCreateInputObjectSchema, PacienteUncheckedCreateInputObjectSchema]) }).strict();