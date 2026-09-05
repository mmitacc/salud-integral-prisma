import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioCreateManyInputObjectSchema as UsuarioCreateManyInputObjectSchema } from './objects/UsuarioCreateManyInput.schema';

export const UsuarioCreateManySchema: z.ZodType<Prisma.UsuarioCreateManyArgs> = z.object({ data: z.union([ UsuarioCreateManyInputObjectSchema, z.array(UsuarioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioCreateManyArgs>;

export const UsuarioCreateManyZodSchema = z.object({ data: z.union([ UsuarioCreateManyInputObjectSchema, z.array(UsuarioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();