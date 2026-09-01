import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './objects/PacienteSelect.schema';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './objects/PacienteInclude.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './objects/PacienteWhereUniqueInput.schema';

export const PacienteFindUniqueOrThrowSchema: z.ZodType<Prisma.PacienteFindUniqueOrThrowArgs> = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), where: PacienteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PacienteFindUniqueOrThrowArgs>;

export const PacienteFindUniqueOrThrowZodSchema = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), where: PacienteWhereUniqueInputObjectSchema }).strict();