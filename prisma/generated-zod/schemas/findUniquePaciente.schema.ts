import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './objects/PacienteSelect.schema';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './objects/PacienteInclude.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './objects/PacienteWhereUniqueInput.schema';

export const PacienteFindUniqueSchema: z.ZodType<Prisma.PacienteFindUniqueArgs> = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), where: PacienteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PacienteFindUniqueArgs>;

export const PacienteFindUniqueZodSchema = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), where: PacienteWhereUniqueInputObjectSchema }).strict();