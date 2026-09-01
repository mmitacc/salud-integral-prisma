import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteCreateManyInputObjectSchema as PacienteCreateManyInputObjectSchema } from './objects/PacienteCreateManyInput.schema';

export const PacienteCreateManySchema: z.ZodType<Prisma.PacienteCreateManyArgs> = z.object({ data: z.union([ PacienteCreateManyInputObjectSchema, z.array(PacienteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PacienteCreateManyArgs>;

export const PacienteCreateManyZodSchema = z.object({ data: z.union([ PacienteCreateManyInputObjectSchema, z.array(PacienteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();