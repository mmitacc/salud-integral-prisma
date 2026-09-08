import { z } from "zod";

export const queryModeloAdminSchema = z
  .object({
    deleted: z
      .enum(["true", "false"], {
        message: "deleted debe ser estrictamente 'true' o 'false'",
      })
      .optional() // Si no lo envían, pasa como undefined
      .transform((val) => (val === undefined ? undefined : val === "true")),
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

export type queryCrudAdminTypeSchema = z.infer<typeof queryModeloAdminSchema>;
