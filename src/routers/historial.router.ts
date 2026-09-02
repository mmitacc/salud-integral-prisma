import { Router } from "express";
import {
  deleteHistorial,
  getAllHistoriales,
  getHistorialById,
  postHistorial,
  putHistorial,
} from "../controllers/historial.controller";
import {
  HistorialCreateInputObjectSchema,
  HistorialUpdateInputObjectSchema,
  HistorialWhereUniqueInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";

const router = Router();

router.get("/", getAllHistoriales);
router.get(
  "/:id",
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  getHistorialById,
);
router.post(
  "/",
  validateBodySchema(HistorialCreateInputObjectSchema),
  postHistorial,
);
router.put(
  "/:id",
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  validateBodySchema(HistorialUpdateInputObjectSchema),
  putHistorial,
);
router.delete(
  "/:id",
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  deleteHistorial,
);

export default router;
