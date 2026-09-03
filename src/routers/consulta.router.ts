import { Router } from "express";
import {
  deleteConsulta,
  getAllConsultas,
  getAllConsultaDeleted,
  getConsultaById,
  postConsulta,
  putConsulta,
  softDeleteConsulta,
} from "../controllers/consulta.controller";
import {
  ConsultaWhereUniqueInputObjectSchema,
  ConsultaUncheckedCreateInputObjectSchema,
  ConsultaUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import { RangoFechasQuerySchema } from "../schemas/querys.schema";

const router = Router();

router.get("/", getAllConsultas);
router.get(
  "/admin",
  validateQuerySchema(RangoFechasQuerySchema),
  getAllConsultaDeleted,
);
router.get(
  "/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  getConsultaById,
);
router.post(
  "/",
  validateBodySchema(ConsultaUncheckedCreateInputObjectSchema),
  postConsulta,
);
router.put(
  "/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  validateBodySchema(ConsultaUncheckedUpdateInputObjectSchema),
  putConsulta,
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
