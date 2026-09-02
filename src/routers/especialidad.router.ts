import { Router } from "express";
import {
  deleteEspecialidad,
  getAllEspecialidades,
  getEspecialidadById,
  postEspecialidad,
  putEspecialidad,
  softDeleteEspecialidad,
} from "../controllers/especialidad.controller";
import {
  EspecialidadWhereUniqueInputObjectSchema,
  EspecialidadUncheckedCreateInputObjectSchema,
  EspecialidadUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";

const router = Router();

router.get("/", getAllEspecialidades);
router.get(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  getEspecialidadById,
);
router.post(
  "/",
  validateBodySchema(EspecialidadUncheckedCreateInputObjectSchema),
  postEspecialidad,
);
router.put(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  validateBodySchema(EspecialidadUncheckedUpdateInputObjectSchema),
  putEspecialidad,
);
router.delete(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  deleteEspecialidad,
);
router.delete(
  "/soft/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  softDeleteEspecialidad,
);

export default router;
