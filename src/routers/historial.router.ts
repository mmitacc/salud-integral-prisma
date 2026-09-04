import { Router } from "express";
import {
  deleteHistorial,
  getAllHistoriales,
  getAllHistorialDeleted,
  getHistorialById,
  postHistorial,
  putHistorial,
  softDeleteHistorial,
} from "../controllers/historial.controller";
import {
  HistorialWhereUniqueInputObjectSchema,
  HistorialUncheckedCreateInputObjectSchema,
  HistorialUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import { RangoFechasQuerySchema } from "../schemas/querys.schema";

const router = Router();

router.get("/", getAllHistoriales);
router.get(
  "/admin",
  validateQuerySchema(RangoFechasQuerySchema),
  getAllHistorialDeleted,
);
router.get(
  "/:id",
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  getHistorialById,
);
router.post(
  "/",
  validateBodySchema(HistorialUncheckedCreateInputObjectSchema),
  postHistorial,
);
router.put(
  "/:id",
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  validateBodySchema(HistorialUncheckedUpdateInputObjectSchema),
  putHistorial,
);
router.delete(
  "/:id",
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  softDeleteHistorial,
);
router.delete(
  "/admin/:id",
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  deleteHistorial,
);

export default router;
