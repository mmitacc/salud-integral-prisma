import { Router } from "express";
import {
  deleteCita,
  getAllCitas,
  getCitaById,
  postCita,
  putCita,
} from "../controllers/cita.controller";
import {
  CitaCreateInputObjectSchema,
  CitaUpdateInputObjectSchema,
  CitaWhereUniqueInputObjectSchema,
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
router.post("/", validateBodySchema(CitaCreateInputObjectSchema), postCita);
router.put(
  "/:id",
  validateParamsSchema(CitaWhereUniqueInputObjectSchema),
  validateBodySchema(CitaUpdateInputObjectSchema),
  putCita,
);
router.delete(
  "/:id",
  validateParamsSchema(CitaWhereUniqueInputObjectSchema),
  deleteCita,
);

export default router;
