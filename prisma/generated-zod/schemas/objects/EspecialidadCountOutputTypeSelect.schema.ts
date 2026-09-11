import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { EspecialidadCountOutputTypeCountUsuariosArgsObjectSchema as EspecialidadCountOutputTypeCountUsuariosArgsObjectSchema } from './EspecialidadCountOutputTypeCountUsuariosArgs.schema'

const makeSchema = () => z.object({
  usuarios: z.union([z.boolean(), z.lazy(() => EspecialidadCountOutputTypeCountUsuariosArgsObjectSchema)]).optional()
}).strict();
export const EspecialidadCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EspecialidadCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadCountOutputTypeSelect>;
export const EspecialidadCountOutputTypeSelectObjectZodSchema = makeSchema();
