import { z } from "zod";

const ConsultaIdSimple = z
  .object({
    id: z.int(),
    estado: z.string(),
    costo: z.unknown().transform((val) => Number(val)),
    citadate: z.coerce.date(),
    registerdate: z.coerce.date(),
    paciente: z.object({
      id: z.number(),
      nombres: z.string(),
      apellidos: z.string(),
    }),
    medico: z.object({
      id: z.number(),
      nombres: z.string(),
      apellidos: z.string(),
    }),
  })
  .transform(
    ({ paciente, medico, citadate, registerdate, id, estado, costo }) => ({
      id,
      fecha: citadate.toLocaleDateString("es-PE", { timeZone: "UTC" }),
      horario: citadate.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "UTC",
      }),
      costo,
      estado,
      paciente,
      medico,
      registerdate: registerdate.toLocaleDateString("es-PE", {
        timeZone: "UTC",
      }),
    }),
  );

export default ConsultaIdSimple;
