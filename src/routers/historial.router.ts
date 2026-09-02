import { Router } from "express";
import {
  deleteHistorial,
  getAllHistoriales,
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
  deleteHistorial,
);
router.delete(
  "/soft/:id",
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  softDeleteHistorial,
);

export default router;
