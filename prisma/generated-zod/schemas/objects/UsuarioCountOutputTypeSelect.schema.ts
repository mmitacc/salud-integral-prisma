import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioCountOutputTypeCountConsultasArgsObjectSchema as UsuarioCountOutputTypeCountConsultasArgsObjectSchema } from './UsuarioCountOutputTypeCountConsultasArgs.schema'

const makeSchema = () => z.object({
  consultas: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeCountConsultasArgsObjectSchema)]).optional()
}).strict();
export const UsuarioCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UsuarioCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCountOutputTypeSelect>;
export const UsuarioCountOutputTypeSelectObjectZodSchema = makeSchema();
