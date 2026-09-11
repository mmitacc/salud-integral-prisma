import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioScalarWhereInputObjectSchema as UsuarioScalarWhereInputObjectSchema } from './UsuarioScalarWhereInput.schema';
import { UsuarioUpdateManyMutationInputObjectSchema as UsuarioUpdateManyMutationInputObjectSchema } from './UsuarioUpdateManyMutationInput.schema';
import { UsuarioUncheckedUpdateManyWithoutEspecialidadInputObjectSchema as UsuarioUncheckedUpdateManyWithoutEspecialidadInputObjectSchema } from './UsuarioUncheckedUpdateManyWithoutEspecialidadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UsuarioUpdateManyMutationInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateManyWithoutEspecialidadInputObjectSchema)])
}).strict();
export const UsuarioUpdateManyWithWhereWithoutEspecialidadInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateManyWithWhereWithoutEspecialidadInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateManyWithWhereWithoutEspecialidadInput>;
export const UsuarioUpdateManyWithWhereWithoutEspecialidadInputObjectZodSchema = makeSchema();
