import { Router } from "express";
import {
  deleteCita,
  getAllCitas,
  getCitaById,
  postCita,
  putCita,
  softDeleteCita,
} from "../controllers/cita.controller";
import {
  CitaWhereUniqueInputObjectSchema,
  CitaUncheckedCreateInputObjectSchema,
  CitaUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";

const router = Router();

router.get("/", getAllCitas);
router.get(
  "/:id",
  validateParamsSchema(CitaWhereUniqueInputObjectSchema),
  getCitaById,
);
router.post(
  "/",
  validateBodySchema(CitaUncheckedCreateInputObjectSchema),
  postCita,
);
router.put(
  "/:id",
  validateParamsSchema(CitaWhereUniqueInputObjectSchema),
  validateBodySchema(CitaUncheckedUpdateInputObjectSchema),
  putCita,
);
router.delete(
  "/:id",
  validateParamsSchema(CitaWhereUniqueInputObjectSchema),
  deleteCita,
);
router.delete(
  "/soft/:id",
  validateParamsSchema(CitaWhereUniqueInputObjectSchema),
  softDeleteCita,
);

export default router;
