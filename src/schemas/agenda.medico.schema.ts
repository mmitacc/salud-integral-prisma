import { z } from "zod";

const AgendaMedicoSchema = z.object({
  nombres: z.string(),
  apellidos: z.string(),
  especialidad: z.object({
    tipo: z.string(),
  }),
  consultas: z.array(
    z
      .object({
        // Coerce convierte automáticamente los strings ISO en objetos Date de JS
        citadate: z.coerce.date(),
        paciente: z.object({
          id: z.int(),
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
        }).format(consulta.citadate),

        // 2. Formateamos el horario a HH:MM
        horario: new Intl.DateTimeFormat("es-PE", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "UTC",
        }).format(consulta.citadate),

        // 3. Aplanamos los campos del paciente aquí dentro
        pacienteId: consulta.paciente.id,
        pacienteNombres: consulta.paciente.nombres,
        pacienteApellidos: consulta.paciente.apellidos,
      })),
  ),
});

const AgendaMedicoResponseSchema = AgendaMedicoSchema.transform((medico) => ({
  nombres: medico.nombres,
  apellidos: medico.apellidos,
  especialidad: medico.especialidad.tipo,
  consultas: medico.consultas,
}));

export default AgendaMedicoResponseSchema;
