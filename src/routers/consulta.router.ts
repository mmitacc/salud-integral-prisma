import { Router } from "express";
import {
  corteOperativo,
  deleteConsulta,
  getAllConsultas,
  getAllConsultaDeleted,
  getConsultaById,
  putConsulta,
  softDeleteConsulta,
  postCita,
  putEstadoCita,
  rentabilidadArea,
} from "../controllers/consulta.controller";
import {
  ConsultaWhereUniqueInputObjectSchema,
  ConsultaUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import { RangoFechasQuerySchema } from "../schemas/querys.schema";
import CrearConsultaSchema from "../schemas/cita.schema";

const router = Router();

router.get("/", getAllConsultas);
router.get(
  "/admin",
  validateQuerySchema(RangoFechasQuerySchema),
  getAllConsultaDeleted,
);
router.get("/corte-operativo", corteOperativo);
router.get("/rentabilidad", rentabilidadArea);
router.get(
  "/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  getConsultaById,
);
router.post("/", validateBodySchema(CrearConsultaSchema), postCita);
router.put(
  "/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  validateBodySchema(ConsultaUncheckedUpdateInputObjectSchema),
  putConsulta,
);
router.put(
  "/cita/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  validateBodySchema(ConsultaUncheckedUpdateInputObjectSchema),
  putEstadoCita,
);
router.delete(
  "/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  softDeleteConsulta,
);
router.delete(
  "/admin/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  deleteConsulta,
);

export default router;
