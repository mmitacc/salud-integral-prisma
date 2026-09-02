import { z } from "zod";

export const RangoFechasQuerySchema = z
  .object({
    fechaInicio: z.coerce
      .date({
        message: "fechaInicio debe ser una fecha válida (YYYY-MM-DD)",
      })
      .optional(),
    fechaFin: z.coerce
      .date({
        message: "fechaFin debe ser una fecha válida (YYYY-MM-DD)",
      })
      .optional(),
  })
  .strict()
  .refine(
    (data) => {
      if (data.fechaInicio && data.fechaFin) {
        return data.fechaFin >= data.fechaInicio;
      }
      return true;
    },
    {
      message: "La fecha fin no puede ser menor a la fecha de inicio",
      path: ["fechaFin"],
    },
  );

export const FiltrarEspecialidadQuerySchema = z
  .object({
    especialidad: z.string().trim().min(1).optional(),
  })
  .strict();
