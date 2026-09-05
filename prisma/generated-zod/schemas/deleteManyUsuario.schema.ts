import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';

export const UsuarioDeleteManySchema: z.ZodType<Prisma.UsuarioDeleteManyArgs> = z.object({ where: UsuarioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioDeleteManyArgs>;

export const UsuarioDeleteManyZodSchema = z.object({ where: UsuarioWhereInputObjectSchema.optional() }).strict();