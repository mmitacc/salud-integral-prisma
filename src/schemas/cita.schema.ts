import { z } from "zod";

export const CrearConsultaSchema = z
  .object({
    id_paciente: z
      .number({
        message: "El id del paciente debe ser un número",
      })
      .int({ message: "El id del paciente debe ser un número entero" }),

    id_medico: z
      .number({
        message: "El id del médico debe ser un número",
      })
      .int({ message: "El id del medico debe ser un número entero" }),

    fecha: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato de fecha inválido (YYYY-MM-DD)"),

    horario: z
      .string()
      .regex(/^\d{2}:\d{2}$/, "Formato de horario inválido (HH:MM)"),

    costo: z
      .number({
        message: "El costo debe ser un número",
      })
      .positive("El costo debe ser un número positivo"),
  })
  // 1. Validamos usando .refine() en lugar de lanzar errores manuales con ZodError
  .refine(
    (data) => {
      const fechaHoraString = `${data.fecha}T${data.horario}:00`;
      const citadate = new Date(fechaHoraString);
      return !isNaN(citadate.getTime());
    },
    {
      message: "La combinación de fecha y hora no es una fecha válida",
      path: ["fecha"], // El error se marcará en el campo fecha
    },
  )
  // 2. Una vez validado, transformamos el objeto para el controlador
  .transform((data) => {
    const fechaHoraString = `${data.fecha}T${data.horario}:00`;
    return {
      id_paciente: data.id_paciente,
      id_medico: data.id_medico,
      costo: data.costo,
      citadate: new Date(fechaHoraString),
    };
  });

export default CrearConsultaSchema;
