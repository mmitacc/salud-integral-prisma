import * as z from 'zod';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicoWhereInputObjectSchema).optional()
}).strict();
export const EspecialidadCountOutputTypeCountMedicosArgsObjectSchema = makeSchema();
export const EspecialidadCountOutputTypeCountMedicosArgsObjectZodSchema = makeSchema();
