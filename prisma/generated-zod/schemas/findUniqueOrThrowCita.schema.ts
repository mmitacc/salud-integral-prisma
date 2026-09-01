import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaSelectObjectSchema as CitaSelectObjectSchema } from './objects/CitaSelect.schema';
import { CitaIncludeObjectSchema as CitaIncludeObjectSchema } from './objects/CitaInclude.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './objects/CitaWhereUniqueInput.schema';

export const CitaFindUniqueOrThrowSchema: z.ZodType<Prisma.CitaFindUniqueOrThrowArgs> = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), where: CitaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CitaFindUniqueOrThrowArgs>;

export const CitaFindUniqueOrThrowZodSchema = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), where: CitaWhereUniqueInputObjectSchema }).strict();