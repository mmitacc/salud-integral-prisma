import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from './objects/UsuarioSelect.schema';
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from './objects/UsuarioInclude.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';

export const UsuarioFindUniqueOrThrowSchema: z.ZodType<Prisma.UsuarioFindUniqueOrThrowArgs> = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), where: UsuarioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UsuarioFindUniqueOrThrowArgs>;

export const UsuarioFindUniqueOrThrowZodSchema = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), where: UsuarioWhereUniqueInputObjectSchema }).strict();