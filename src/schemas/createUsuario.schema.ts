import { z } from "zod";
import { Role } from "../../prisma/generated-client/enums";

const createUsuarioSchema = z.object({
  nombres: z.string().max(100),
  apellidos: z.string().max(100),
  telefono: z.string().max(20),
  email: z
    .email({ message: "El formato del correo electrónico no es válido" })
    .max(150),
  masculino: z.boolean().optional(),
  fechanacimiento: z.coerce.date(),
  registerdate: z.coerce.date().optional(),
  id_especialidad: z.number({ message: "La especialidad es obligatoria" }),
  role: z.enum(Role),
  username: z.string().min(1, "El nombre de usuario es obligatorio"),
  password: z.string().min(1, "La contraseña es obligatoria"),
});
export default createUsuarioSchema;
