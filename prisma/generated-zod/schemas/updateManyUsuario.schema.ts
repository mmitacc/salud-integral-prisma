import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioUpdateManyMutationInputObjectSchema as UsuarioUpdateManyMutationInputObjectSchema } from './objects/UsuarioUpdateManyMutationInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';

export const UsuarioUpdateManySchema: z.ZodType<Prisma.UsuarioUpdateManyArgs> = z.object({ data: UsuarioUpdateManyMutationInputObjectSchema, where: UsuarioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioUpdateManyArgs>;

export const UsuarioUpdateManyZodSchema = z.object({ data: UsuarioUpdateManyMutationInputObjectSchema, where: UsuarioWhereInputObjectSchema.optional() }).strict();