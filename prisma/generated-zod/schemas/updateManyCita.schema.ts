import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaUpdateManyMutationInputObjectSchema as CitaUpdateManyMutationInputObjectSchema } from './objects/CitaUpdateManyMutationInput.schema';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './objects/CitaWhereInput.schema';

export const CitaUpdateManySchema: z.ZodType<Prisma.CitaUpdateManyArgs> = z.object({ data: CitaUpdateManyMutationInputObjectSchema, where: CitaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CitaUpdateManyArgs>;

export const CitaUpdateManyZodSchema = z.object({ data: CitaUpdateManyMutationInputObjectSchema, where: CitaWhereInputObjectSchema.optional() }).strict();