import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from './objects/UsuarioSelect.schema';
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from './objects/UsuarioInclude.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';

export const UsuarioDeleteOneSchema: z.ZodType<Prisma.UsuarioDeleteArgs> = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), where: UsuarioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UsuarioDeleteArgs>;

export const UsuarioDeleteOneZodSchema = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), where: UsuarioWhereUniqueInputObjectSchema }).strict();