import { z } from "zod";

const AgendaMedicoResponseSchema = z.object({
  nombres: z.string(),
  apellidos: z.string(),
  consultas: z.array(
    z
      .object({
        // Coerce convierte automáticamente los strings ISO en objetos Date de JS
        fecha: z.coerce.date(),
        horario: z.coerce.date(),
        paciente: z.object({
          nombres: z.string(),
          apellidos: z.string(),
        }),
      })
      .transform((consulta) => ({
        // 1. Formateamos la fecha a dd/mm/aaaa
        fecha: new Intl.DateTimeFormat("es-PE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          timeZone: "UTC",
        }).format(consulta.fecha),

        // 2. Formateamos el horario a HH:MM
        horario: new Intl.DateTimeFormat("es-PE", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "UTC",
        }).format(consulta.horario),

        // 3. Aplanamos los campos del paciente aquí dentro
        pacienteNombres: consulta.paciente.nombres,
        pacienteApellidos: consulta.paciente.apellidos,
      })),
  ),
});

export default AgendaMedicoResponseSchema;
