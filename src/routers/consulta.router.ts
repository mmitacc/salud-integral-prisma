import { Router } from "express";
import {
  deleteConsulta,
  getAllConsultas,
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
} from "../middlewares/validate.schema";

const router = Router();

router.get("/", getAllConsultas);
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
  deleteConsulta,
);
router.delete(
  "/soft/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  softDeleteConsulta,
);

export default router;
