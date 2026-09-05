import { z } from "zod";

const updatePasswordSchema = z.object({
  password: z
    .string({
      message: "La contraseña es obligatoria",
    })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
    .regex(/[A-Z]/, {
      message: "La contraseña debe tener al menos una letra mayúscula",
    })
    .regex(/[a-z]/, {
      message: "La contraseña debe tener al menos una letra minúscula",
    })
    .regex(/[0-9]/, { message: "La contraseña debe tener al menos un número" }),
  oldPassword: z.string({
    message: "La contraseña anterior es obligatoria",
  }),
  username: z.string({
    message: "El nombre de usuario es obligatorio",
  }),
});

export default updatePasswordSchema;
