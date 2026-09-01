import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './objects/CitaWhereInput.schema';

export const CitaDeleteManySchema: z.ZodType<Prisma.CitaDeleteManyArgs> = z.object({ where: CitaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CitaDeleteManyArgs>;

export const CitaDeleteManyZodSchema = z.object({ where: CitaWhereInputObjectSchema.optional() }).strict();